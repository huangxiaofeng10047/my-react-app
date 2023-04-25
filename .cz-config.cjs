module.exports = {
  types: [
    { value: 'feature', name: 'feature:  增加新功能' },
    { value: 'fix', name: 'fix:      修复bug' },
    { value: 'bug', name: 'bug:      测试反馈bug列表中的bug号' },
    { value: 'ui', name: 'ui:       更新UI' },
    { value: 'docs', name: 'docs:     文档变更' },
    { value: 'style', name: 'style:    代码格式(不影响代码运行的变动)' },
    { value: 'perf', name: 'perf:     性能优化' },
    {
      value: 'refactor',
      name: 'refactor: 重构(既不是增加feature，也不是修复bug)',
    },
    { value: 'release', name: 'release:  发布' },
    { value: 'deploy', name: 'deploy:   部署' },
    { value: 'test', name: 'test:     增加测试' },
    {
      value: 'chore',
      name: 'chore:    构建过程或辅助工具的变动(更改配置文件)',
    },
    { value: 'revert', name: 'revert:   回退' },
    { value: 'build', name: 'build:    打包' },
  ], // override the messages, defaults are as follows
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入您修改的范围(可选):',
    subject: '请简要描述提交 message (必填):',
    body: '请输入详细描述(可选):',
    breaking: '是破坏性修改吗？(可选，默认N)',
    footer: '关联关闭的issue(可选):',
    confirmCommit: '确认使用以上信息提交吗？(yes/no)',
  },
  allowCustomScopes: true, //   allowBreakingChanges: ['feat', 'fix'], // 跳过哪些步骤 // skipQuestions: ['body', 'breaking'],
  subjectLimit: 100,
};
