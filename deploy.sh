git status
git add .
git commit -m date
git push origin master

# 开始构建
npm run build

# 删除过往文件
cd ../gatsbydeploy
ls | grep -v ./git | xargs rm -rf

# 此时已经在deploy目录了
cp -rf ../gatsbyblog/public/* ./
# git 
git status
git add .
git commit -m date
git push origin master