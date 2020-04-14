出现这个问题的原因可能是：PowerShell执行策略的问题

 

<font color="blue">解决：</font>

1. 右击VSCode图标，选择以管理员身份运行；
2. 在终端中执行get-ExecutionPolicy，显示Restricted，表示状态是禁止的；
3. 这时执行set-ExecutionPolicy RemoteSigned；
4. 此时再执行get-ExecutionPolicy，显示RemoteSigned，则表示状态解禁，可以运行