# 开始构建
npm run build

# 删除过往文件
cd ~/center/gatsbydeploy
ls | grep -v ./git | xargs rm -rf

# 移动文件
cp -rf ~/center/gatsbyblog/public/* ~/center/gatsbydeploy/

# git 
git status
