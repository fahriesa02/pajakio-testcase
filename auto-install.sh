#!/bin/bash
echo "installing sequence of nodejs"
sudo apt-get update -y
sudo apt-get install software-properties-common -y
sudo add-apt-repository --yes --update ppa:ansible/ansible
sudo apt-get install nodejs ansible -y
node -v
echo "running service test case pajak.io"
sudo npm install
pm2 index.js
node client1.js
node client2.js