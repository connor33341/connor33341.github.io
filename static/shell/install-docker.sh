# Written by connor33341
echo "Installing Docker"
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
curl -o docker.deb https://desktop.docker.com/linux/main/amd64/docker-desktop-amd64.deb?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-linux-amd64&_gl=1*thn5q2*_gcl_au*NTE0MjUwNzM3LjE3NDQ3NjI0ODg.*_ga*MTUyMjMwMDM5NS4xNzQ0NzYyNDg4*_ga_XJWPQMJYHQ*MTc0NDc2MjQ4OC4xLjEuMTc0NDc2MjQ5Ni41Mi4wLjA.
sudo apt-get install ./docker.deb
echo docker compose version > conpose-version.txt
echo docker --version > docker-version.txt
echo "Docker install Completed"
