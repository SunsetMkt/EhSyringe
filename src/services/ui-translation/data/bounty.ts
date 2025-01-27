import { merge } from '../helper';

merge(
    /^\/bounty(_post)?\.php/,
    undefined,
    {
        'Bounty List': '悬赏列表',
        'Most Wanted Standard Bounties': '热门标准悬赏',
        'Most Wanted Translation Bounties': '热门翻译悬赏',
        'Most Wanted Editing Bounties': '热门编辑悬赏',
        'Post New Bounty': '发布新悬赏',

        'Search Bounties': '搜索悬赏',
        'Bounty Type: ': '悬赏类型：',
        All: '全部',
        Standard: '标准',
        Translation: '翻译',
        Editing: '编辑',
        ' \xA0 Bounty Status: ': ' \xA0 悬赏状态：',
        'Last Updated': '最后更新',
        'Bounty Headline': '悬赏标题',
        'Bounty Type': '悬赏类型',
        'Bounty Status': '悬赏状态',
        'Total Bounty': '总赏金',
        'Posted By': '发布者',
        'Open/New': '开放/新创建',
        'Open/Accepted': '开放/已接受',
        'Closed/Reserved': '关闭/已保留',
        'Closed/Claimed': '关闭/已认领',
        'Closed/Completed': '关闭/已完成',
        'You are currently an Unranked Bounty Hunter.': '您当前是未评级赏金猎人。',

        'Bounty Poster:': '发布者：',
        'Posted Date:': '发布日期：',
        'Bounty Status:': '悬赏状态：',
        'Min Hunter Rank:': '最低等级要求：',
        Unranked: '未评级',
        'Current Reward:': '当前赏金：',
        '< Prev 10': '< 上一页',
        'Next 10 >': '下一页 >',

        'Bounty Headline:': '悬赏标题：',
        'A short one-liner consistently describing the bounty.': '一句话描述悬赏内容。',
        'This will appear on the Bounty Overview screen.': '它会显示在悬赏概览页面。',
        'Detailed Bounty Description:': '悬赏详情：',
        'Remember to be specific. Bounties like "Requesting ': '请注意要具体。悬赏如 “请求 ',
        ' Hentai" is not very specific, and any bounty claim featuring anything that matches would be accepted; bounties like "Any ':
            ' Hentai” 不是很具体，包含匹配内容的悬赏认领都可以被接受；悬赏如 “任何我没有的 ',
        ' Hentai I don\'t have" would require an actual list; and so on. If you have any minimum quality/resolution demands, make sure to include this as well.':
            ' Hentai” 需要一个确切的列表；以此类推。如果您有任何最低质量/分辨率要求，请务必包含在内。',
        'The more precise you can define your bounty, the higher the chance you will be satisfied with its result. Keep in mind that if your bounty is vague and someone technically fulfills it (as determined by a Bounty Moderator), your posted reward is forfeit.':
            '您的悬赏内容定义的越精确，您对其结果的满意度就会越高。请记住，如果您的悬赏内容含糊不清，而某人在技术上满足了它 (由悬赏版主裁定)，您发布的奖励会被没收。',
        'Wanted Poster:': '悬赏海报：',
        'You can optionally upload a thumbnail, cover page, an image from an incomplete collection, or any other relevant image to further specify the bounty. (JPG/PNG)':
            '您可以选择上传缩略图、封面、不完整合集的图像或任何其他相关的图像，以进一步指定悬赏。(JPG/PNG)',
        'Offered Reward:': '悬赏金额：',
        'The reward you offer for this bounty, in Credits and/or Hath. The minimum allowed is 25000 Credits or 5 Hath.':
            '您为此悬赏提供的赏金，以 Credits 和/或 Hath 计。最低要求 25000 Credits 或 5 Hath。',
        'Bounty Type:': '悬赏类型：',
        'If this bounty is for a translation or editing job, select the corresponding type and provide a link to the source material.':
            '如果此悬赏为翻译或编辑工作，请选择相应的类型并提供源材料的链接。',
        'Otherwise, select Standard.': '否则，请选择标准。',
        'Minimum Hunter Rank:': '最低等级要求：',
        'This is the minimum rank a Bounty Hunter needs to accept or claim this bounty. The default recommended setting will allow unranked hunters, but exclude those who have an inordinate number of rejected claims.':
            '这是赏金猎人能够接受或认领此悬赏所需的最低等级。默认推荐设置将允许未评级的猎人，但不会包括那些曾被多次拒绝认领的猎人。',
        'Accepted Delivery:': '交付方式：',
        'These are the delivery methods you accept for this bounty. If you only want galleries posted to E-Hentai Galleries, you do not need to change this.':
            '请选择您接受的交付方式。如果您只是希望将图库发布到 E-Hentai，则无需更改此设置。',
        'Posted to the E-Hentai Galleries System': '发布到 E-Hentai 图库系统',
        'Archive download at a file locker service': '通过文件保管服务下载归档文件',
        'BitTorrent download at a public tracker': '通过使用公共 tracker 的 BT 下载',
        'Other; specify in bounty description': '其他，请在悬赏描述中指定',
        'Please verify that the information is correct before you submit this bounty.':
            '在提交此悬赏之前，请确认信息正确。',
        'Post Bounty': '发布悬赏',

        'Bounty Posted By:': '发布者：',
        'Contact Poster': '联系发布者',
        Updated: '更新于',
        'Bounties that are ': '状态为 ',
        ' are open to be accepted and claimed. If you intent to fulfill a bounty within a reasonable amount of time, you can optionally ':
            ' 的悬赏可以被接受和认领。如果您打算在合理的时间内完成悬赏，可以先 ',
        accept: '接受',
        ' the bounty first. These expire after a month.': ' 悬赏，此状态会在一个月后过期。',
        'After a bounty has been ': '若悬赏被 ',
        claimed: '认领',
        ', the original poster of the bounty has seven days to accept or dispute it. If there is a dispute or the acceptance period expires, a Bounty Moderator will decide the outcome of the bounty.':
            '，悬赏发布者有七天时间来选择接受认领或提出质疑。如果出现争议或接受期限过期，将由悬赏版主裁定悬赏的结果。',
        'A rejected claim cannot be resubmitted, and will affect your rank.':
            '被拒绝的认领不能重新提交，并且会影响您的等级。',
        'You have not yet accepted or claimed this bounty.': '您尚未接受或认领此悬赏。',
        'Your rank (Unranked) is insufficient to accept this bounty.': '您的等级 (未评级) 不足以接受此悬赏。',
        'For accepting a bounty, you can enter a short comment here. For claiming a bounty, you must enter all the necessary details for where the bounty can be found.':
            '接受悬赏时，您可以在此处输入简短的评论。认领悬赏时，则必须提供悬赏所需的所有详细信息。',
        'If you intend to claim this bounty, make sure that all necessary URLs entered above are correct, and that they match the accepted delivery methods of this bounty. Do not, for instance, submit a link to a torrent file if that delivery method is not accepted. All information required to determine the validity of a claim MUST be posted in the claim itself.':
            '如果您准备认领此悬赏，请确保上方提供的所有必要 URL 都是正确的，并且与此悬赏的指定交付方式相匹配。例如，请不要在发布者不接受 BT 下载的情况下提供一个指向种子文件的链接。为保证认领的有效性，必须在认领请求中包含所有必要的信息。',
        'In order to claim a bounty, you have to post a deposit of 1000 credits. This is returned to you if the claim is accepted, but if the claim is found to be invalid, it will be forfeit.':
            '要认领悬赏，您必须支付 1000 Credits 的保证金。如果认领被接受，保证金将退还给您，但如果认领被判定无效，则会被没收。',
        'Accept Bounty': '接受悬赏',
        'Claim Bounty': '认领悬赏',

        'You can add additional rewards as long as the bounty has not been accepted or claimed. Rewards lock in after 15 minutes and can then only be rescinded after a month or if the bounty is cancelled. You will have no saying in whether a claim is accepted or not.':
            '只要悬赏未被认领，您就可以增加额外赏金。赏金会在 15 分钟后被锁定，只能在一个月后或悬赏被取消时才能撤回。您无权决定是否接受认领。',
        'You have ': '您拥有 ',
        '. Minimum is ': '。最低要求 ',
        ' or ': ' 或 ',
        '.': '。',
        'Submit Additional Reward': '提交额外赏金',
        'You must enter a minimum additional reward of 5000 C or 1 Hath.':
            '您必须输入最低额外赏金 (5000 C 或 1 Hath)。',
        'You can no longer add rewards for this bounty.\n\n\t\t': '您无法再为此悬赏增加赏金。',
        'Grant Date': '授予日期',
        Amount: '赏金',
        'Added By': '添加者',
        'Original Bounty': '初始赏金',
        'Claim Date': '认领日期',
        Status: '状态',
        'Bounty Hunter': '赏金猎人',
        Rating: '等级',
        'This bounty has not been accepted or claimed by anyone.': '此悬赏尚未被任何人接受或认领。',
        'Bounty Accepted': '悬赏接受',
        'Bounty Reserved': '悬赏保留',
        'Claim Pending': '认领待定',
        'Claim Disputed': '认领争议',
        'Claim Accepted': '认领接受',
        '\n\tn/t\n\t\n\t': '', // E-Hentai's bug
        'Comments from Bounty Poster:': '悬赏发布者评论：',
        '(No comment was given.)': '(未提供评论)',
        'This claim has been accepted, and the bounty has been closed.\n\t': '此认领已被接受，悬赏已关闭。',
        'This claim has been disputed, and is pending ruling by a Bounty Moderator.\n\t':
            '此认领存在争议，正在等待悬赏版主裁决。',
    },
    [
        [/^Showing /, '正在显示'],
        [/All Open Bounties$/, '所有未完成悬赏'],
        [/All Reserved Bounties$/, '所有已保留悬赏'],
        [/All Claimed Bounties$/, '所有已认领悬赏'],
        [/All Completed Bounties$/, '所有已完成悬赏'],
        [/Bounties Posted By Me$/, '我发布的悬赏'],
        [/Bounties Boosted By Me$/, '我加价的悬赏'],
        [/Bounties Accepted By Me$/, '我接受的悬赏'],
        [/Bounties Reserved For Me$/, '我保留的悬赏'],
        [/Bounties Claimed By Me$/, '我认领的悬赏'],
        [/Bounties Completed By Me$/, '我完成的悬赏'],
        [/^Rank ([A-Z])$/, '$1 级'],
        [/^Remaining Claim Dispute Time: /, '剩余认领争议时间：'],
        [/(\d+) days and (\d+) hours/, '$1 天 $2 小时'],
    ],
);
