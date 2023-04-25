module.exports = {
    types: [
        {
            value: 'feat',
            name: 'feat: 新增一个功能',
        },
        {
            value: 'fix',
            name: 'fix: 修复一个Bug',
        },
        {
            value: 'docs',
            name: 'docs: 文档变更',
        },
        {
            value: 'style',
            name: 'style: 代码格式（不影响功能，例如空格、分号等格式修正）',
        },
        {
            value: 'refactor',
            name: 'refactor: 代码重构，注意和特性、修复区分开',
        },
        {
            value: 'perf',
            name: 'perf: 提升性能',
        },
        {
            value: 'test',
            name: 'test: 添加一个测试',
        },
        {
            value: 'chore',
            name: 'chore: 变更构建流程或辅助工具',
        },
    ],
    appendIssueFromBranchName: true,
    allowTicketNumber: false,
    isTicketNumberRequired: true,
    footerPrefix: 'JTFW-',
    messages: {
        type: '请选择提交类型:',
        subject: '请输入提交信息:',
        body: '请输入提交详细内容. 用 "|" 换行:\n',
        footer: '请输入家服iwork编号:',
        confirmCommit: '确定要执行上面的提交吗?',
    },
    allowCustomScopes: true, //
    skipQuestions: ['scope', 'breaking'], // 想跳过的问题列表
    subjectLimit: 100, // subject主题限制长度
};