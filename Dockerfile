# 軽量なWebサーバーNginxをベースにする
FROM nginx:alpine

# 自分のパソコンにある全てのファイルを、コンテナのWeb公開フォルダにコピー
COPY . /usr/share/nginx/html

# Webサーバーの標準ポート80番を公開
EXPOSE 80

# Nginxを起動
CMD ["nginx", "-g", "daemon off;"]