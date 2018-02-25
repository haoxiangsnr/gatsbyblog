# 删除旧文件
rm -rf docs
# 开始构建
npm run build
# 修改命名
mv public docs

git status
git add .
git commit -m date
# 推送到两处仓库
git push all master