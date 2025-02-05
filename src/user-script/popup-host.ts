import { Container } from 'services';
import { isHathNetwork } from 'utils/hosts';
import { Popup } from 'plugin/popup';
import { packageJson } from 'info';
import { setBadge } from 'providers/utils';

import './popup-host.less';

function getNumber(key: string, defaultValue: number): number {
    const value = localStorage.getItem(key);
    if (!value) return defaultValue;
    const parsed = Number.parseFloat(value);
    if (Number.isNaN(parsed)) return defaultValue;
    return parsed;
}

function clamp(value: number, min: number, max: number): number {
    if (value < min) value = min;
    else if (value > max) value = max;
    return value;
}

const clampX = (value: number): number => clamp(value, 4, document.documentElement.clientWidth - 44);
const clampY = (value: number): number => clamp(value, 4, document.documentElement.clientHeight - 44);

function dragButton(el: HTMLElement, click: (e: MouseEvent) => void): void {
    const initX = clampX(getNumber(`eh-popup-button-x`, 0.02) * document.documentElement.clientWidth);
    const initY = clampY(getNumber(`eh-popup-button-y`, 0.02) * document.documentElement.clientHeight);

    // set the element's init position:
    el.style.bottom = `${initY}px`;
    el.style.right = `${initX}px`;

    let mouseX = 0,
        mouseY = 0,
        startX = 0,
        startY = 0;

    el.addEventListener('pointerdown', dragMouseDown, { passive: false });
    el.addEventListener('click', elementClick, { passive: false });

    let moved = false;

    function dragMouseDown(e: PointerEvent): void {
        e.preventDefault();
        // get the mouse cursor position at startup:
        startX = mouseX = e.clientX;
        startY = mouseY = e.clientY;
        moved = false;
        document.addEventListener('pointerup', closeDragElement, { passive: false });
        document.addEventListener('pointermove', elementDrag, { passive: false });
    }

    function elementDrag(e: PointerEvent): void {
        e.preventDefault();
        const currentX = Number.parseFloat(el.style.right);
        const currentY = Number.parseFloat(el.style.bottom);
        // calculate the new cursor position:
        const diffX = mouseX - e.clientX;
        const diffY = mouseY - e.clientY;
        mouseX = e.clientX;
        mouseY = e.clientY;

        const nextX = clampX(currentX + diffX);
        const nextY = clampY(currentY + diffY);
        // set the element's new position:
        el.style.right = `${nextX}px`;
        el.style.bottom = `${nextY}px`;

        if (Math.abs(mouseX - startX) + Math.abs(mouseY - startY) > 10) {
            moved = true;
        }
    }

    function closeDragElement(e: PointerEvent): void {
        e.preventDefault();
        // stop moving when mouse button is released:
        document.removeEventListener('pointerup', closeDragElement);
        document.removeEventListener('pointermove', elementDrag);
        const finalX = clampX(Number.parseFloat(el.style.right));
        const finalY = clampY(Number.parseFloat(el.style.bottom));
        el.style.right = `${finalX}px`;
        el.style.bottom = `${finalY}px`;
        localStorage.setItem(`eh-popup-button-x`, String(finalX / document.documentElement.clientWidth));
        localStorage.setItem(`eh-popup-button-y`, String(finalY / document.documentElement.clientHeight));
    }

    function elementClick(e: MouseEvent): void {
        if (moved) {
            moved = false;
            return;
        }
        click(e);
    }
}

function shouldShowPopup(): boolean {
    if (isHathNetwork(location.hostname)) return false;
    if (
        /^\/mpv\//i.test(location.pathname) ||
        location.pathname === '/archiver.php' ||
        location.pathname === '/gallerytorrents.php' ||
        location.pathname === '/gallerypopups.php'
    )
        return false;

    return true;
}

export function createPopup(): void {
    if (!shouldShowPopup()) {
        return;
    }
    const button = document.body.appendChild(document.createElement('div'));
    button.id = 'eh-syringe-popup-button';
    button.title = packageJson.displayName;
    const badge = button.appendChild(document.createElement('div'));
    badge.id = 'eh-syringe-popup-badge';
    setBadge({ text: '' });
    const popupBack = document.body.appendChild(document.createElement('div'));
    popupBack.id = 'eh-syringe-popup-back';
    popupBack.lang = 'zh-hans';
    const popup = popupBack.appendChild(document.createElement('div'));
    popup.id = 'eh-syringe-popup';

    const closeListeners: Array<() => unknown> = [];
    const openListeners: Array<() => unknown> = [];
    popupBack.classList.add('close');
    popupBack.ontransitionend = (ev) => {
        if (ev.target !== popupBack) return;
        if (popupBack.classList.contains('opening')) {
            popupBack.classList.remove('opening', 'close');
            popupBack.classList.add('open');
        }
        if (popupBack.classList.contains('closing')) {
            popupBack.classList.remove('closing', 'open');
            popupBack.classList.add('close');
            closeListeners.forEach((l) => l());
        }
    };
    const open = (): void => {
        openListeners.forEach((l) => l());
        popupBack.classList.add('opening');
    };
    const close = (): void => {
        popupBack.classList.add('closing');
    };
    Container.get(Popup).mount(popup, {
        close: close,
        onopen(listener) {
            openListeners.push(listener);
        },
        onclose(listener) {
            closeListeners.push(listener);
        },
    });
    popupBack.addEventListener('click', (ev) => {
        if (ev.target === popupBack && popupBack.classList.contains('open')) close();
    });
    dragButton(button, () => {
        if (popupBack.classList.contains('close')) open();
    });
}
