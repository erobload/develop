@echo off
rem このファイルの場所をカレントディレクトリとする
cd /d %~dp0

rem サーバ起動
docker-compose exec node bash