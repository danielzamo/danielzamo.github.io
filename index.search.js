var relearn_search_index = [
  {
    "content": " En este proyecto se despliega un cluster Kubernetes basado en k3s.\nURL repositorio: Gitlab/dzamo/k8s-k3s-various-clusters\nTecnologías usadas Alma Linux 9 K3s Ansible - roles Instalación desatendida del sistema operativo KVM. Reserva y creación del recurso vía CLI - virt-install ",
    "description": "Cluster kubernetes con k3s. 1 nodo master (control-plane) + 'N' nodos worker",
    "tags": null,
    "title": "Kubernetes cluster k3s",
    "uri": "/kubernetes-cluster-k3s/index.html"
  },
  {
    "content": " Entradas relacionadas a despliegues de implementaciones realizados.\nTodo el código implementado en estos proyectos poseen repositorios en el cloud, se intentará aquí agregar el URL donde se encuentra el código fuente o especificación de la implementación realizada.\nAlgunos de las aplicaciones y/o servicios desplegados/implementados para kubernetes son:\nAnsible - AWXEste proyecto es el despliegue de Ansible AWX, edición comunitaria de Red Hat Ansible Tower.\n",
    "description": "Aplicaciones y/o servicios de Kubernetes",
    "tags": null,
    "title": "Kubernetes - despliegues",
    "uri": "/kubernetes-deployments/index.html"
  },
  {
    "content": "¿Qué es un pod? Un pod es un set de contenedor/es. Un pod es el componente mas pequeño/atómico de Kubernetes. Un pod puede tener múltiples/varios contenedores, aunque normalmente solo contendrá 1. Creación de un pod desde el CLI El siguiente comando crea un pod, como un deployment. Para esto por ejemplo se puede ejecutar:\nkubectl create deployment deployment-pod-nginx-01 --image=nginx Algunos comandos Matando el pod Para matar el anterior pod se puede ejecutar:\n[dzamo@victus my-readings] alias k='kubectl' # pods en ejecución [dzamo@victus my-readings] k get pods # eliminar el pod del deployment [dzamo@victus my-readings] k delete pod deployment-pod-nginx-01-77c5f959c5-z4hfn Borrar el deployment (borrar el pod) [dzamo@victus my-readings] alias k='kubectl' # pods en ejecución [dzamo@victus my-readings] k get deployments # eliminar el pod del deployment [dzamo@victus my-readings] k delete deployment deployment-pod-nginx-01 [dzamo@victus my-readings] k get deployments Al haber sido credo con el comando kubectl create deployment .... , el orquetador Kubernetes vuelve a levantar el pod.\nCreación de pod desde un manifiesto (mínimo) Normalmente se utilizan manifiestos, para crear los componentes para desplegar las aplicaciones en un cluster kubernetes. Estos están codificados en ficheros yaml. A continuación se especifica la creación de un pod (mínimo) mediante un fichero de este tipo. El código es el siguiente:\ncat 01-pod-minimal.md apiVersion: v1 kind: Pod metadata: name: nginx spec: containers: - name: nginx image: nginx:alpine Aplicando el manifiesto Para aplicar (crear el pod) se puede ejecutar:\nkubectl create -f 01-pod-minimal.md Nota: Observar en el manifiesto se ha utilizado kind: Pod una vez corriendo el propio pod si se lo borra (kubectl delete ....) el pod se destruye/borra y Kubernetes no lo volvera a levantar (los de tipo kind: Pod simplemente se destruyen).\n",
    "description": "",
    "tags": [
      "kubernetes",
      "documentation"
    ],
    "title": "Pod",
    "uri": "/kubernetes-notes/pod/index.html"
  },
  {
    "content": "Entradas relacionadas a Kubernetes.\nTodo el código implementado y los casos de uso probados se encuentran disponible en el repositorio my-code del sitio de Gitlab.\n",
    "description": "",
    "tags": null,
    "title": "Kubernetes - notas",
    "uri": "/kubernetes-notes/index.html"
  },
  {
    "content": " En esta sección se comparten configuraciones de servicios y/o configuración de servidores basados en Ubuntu server LTS.\nURL repositorio: PENDIENTE. Por el momento hasta que finalize el proyecto, el contanido solo es compartido aquí, en este sitio web estático\nTecnologías usadas Distribución Linux principal usada: Ubuntu server LTS - 22.04.. Despliegues/artículos actuales compartidos aquí Anfitrión KVMUbuntu server LTS, host anfitrión virtualización KVM\nMinikube (driver kvm)Ubuntu server LTS, cluster k8s minikube (driver kvm)\n",
    "description": "Ubuntu server LTS",
    "tags": null,
    "title": "Ubuntu server LTS",
    "uri": "/ubuntu-lts-server/index.html"
  },
  {
    "content": " Despliegue de servidor host anfitrión host virtualización KVM.\nEspecificación inicial 1 x bridge 1 x ethernet IP\nIP gateway network DNS 192.168.123.35 192.168.123.1 192.168.123.0/24 192.168.123.1,8.8.8.8,1.1.1.1 Actualización sistema, instalando paquetes (opcionales) dzamo@ubuntu-k8s:~$ sudo apt -y update \u0026\u0026 sudo apt -y upgrade dzamo@ubuntu-k8s:~$ sudo apt install -y neovim tmux vim vim-scripts exuberant-ctags python-greenlet-dev Instalación/configuración de KVM # Install KVM in Ubuntu dzamo@ubuntu-k8s:~$ sudo apt -y install qemu-kvm libvirt-dev bridge-utils libvirt-daemon-system libvirt-daemon virtinst bridge-utils libosinfo-bin libguestfs-tools virt-top dzamo@ubuntu-k8s:~$ sudo usermod -a $USER -G libvirt,libvirt-qemu,libvirt-dnsmasq,kvm dzamo@ubuntu-k8s:~$ sudo modprobe vhost_net dzamo@ubuntu-k8s:~$ sudo lsmod | grep vhost dzamo@ubuntu-k8s:~$ echo \"vhost_net\" | sudo tee -a /etc/modules dzamo@ubuntu-k8s:~$ sudo vim /etc/netplan/00-installer-config.yaml Configuración bridge e interface eth dzamo@ubuntu-k8s:~$ cat /etc/netplan/00-installer-config.yaml network: ethernets: enp1s0: dhcp4: false dhcp6: false bridges: br0: interfaces: [enp1s0] dhcp4: false addresses: [192.168.123.35/24] macaddress: 52:54:00:e8:a8:08 routes: - to: default via: 192.168.123.1 metric: 100 nameservers: addresses: [192.168.123.1,1.1.1.1,8.8.8.8] search: [my.net] parameters: stp: false dhcp6: false version: 2 dzamo@ubuntu-k8s:~$ sudo netplan apply dzamo@ubuntu-k8s:~$ ip a dzamo@ubuntu-k8s:~$ wget www.google.com dzamo@ubuntu-k8s:~$ rm index.html dzamo@ubuntu-k8s:~$ ip a dzamo@ubuntu-k8s:~$ sudo reboot ",
    "description": "Ubuntu server LTS, host anfitrión virtualización KVM",
    "tags": [
      "virtualization",
      "projects",
      "KVM",
      "UbuntuLTS"
    ],
    "title": "Anfitrión KVM",
    "uri": "/ubuntu-lts-server/kvm/index.html"
  },
  {
    "content": "Este proyecto es el despliegue de Ansible AWX, edición comunitaria de Red Hat Ansible Tower.\nEn la siguiente representación se muestra un diagrama del despliegue. El cual es realizado sobre un host motor de kubernetes con minikube con libvirt como runtime (driver kvm).\nTecnologías utilizadas Contenedores: kubernetes / k3s or minikube Dist. Linux: AlmaLinux 9 Sesión de instalación/configuración La sesión siguiente fue realizada tanto sobre un cluster de minikube como en uno con k3s. Aquí se comparte el despligue realizado con k3s.\n# Ansible AWX in kubernetes k3s git clone https://github.com/ansible/awx-operator.git cd awx-operator/ git checkout 2.2.1 git branch export NAMESPACE=ansible-awx make deploy kubectl get pods -n $NAMESPACE cp awx-demo.yml ansible-awx.yml # Modifico el nombre del namespace a crear sed -i 's/name: awx-demo/name: ansible-awx/g' ansible-awx.yml sudo /usr/local/bin/kubectl config set-context --current --namespace=$NAMESPACE kubectl apply -f ansible-awx.yml # Reviso el estado del despliegue, para luego continuar kubectl logs -f deployments/awx-operator-controller-manager -c awx-manager kubectl get pods -l \"app.kubernetes.io/managed-by=awx-operator\" kubectl get service -l \"app.kubernetes.io/managed-by=awx-operator\" # Genero una primera contraseña para el usuario admin pueda ingresar a la interface web kubectl get secret ansible-awx-admin-password -o jsonpath=\"{.data.password}\" | base64 --decode; echo # Forward al servicio para acceder externamente kubectl port-forward service/ansible-awx-service --address 0.0.0.0 10445:80 \u0026 Ansible AWX debería estar disponible en el URL http://\u003cIP_SERVIDOR_KUBERNETES\u003e:10445. En este caso ahora implementado el ingreso a la interface Web se muestra en la siguiente captura.\nRepositorio …\n",
    "description": "Este proyecto es el despliegue de Ansible AWX, edición comunitaria de Red Hat Ansible Tower.",
    "tags": [
      "kubernetes",
      "projects"
    ],
    "title": "Ansible - AWX",
    "uri": "/kubernetes-deployments/ansible-awx/index.html"
  },
  {
    "content": "Manifiesto mínimo [dzamo@victus my-codes]$ cat kubernetes/01-pod-minimal.yaml apiVersion: v1 kind: Pod metadata: name: nginx spec: containers: - name: nginx image: nginx:alpine Aplicando manifiesto (crear pod) [dzamo@victus my-codes]$ kubectl apply -f kubernetes/01-pod-minimal.yaml ",
    "description": "",
    "tags": [
      "documentation",
      "kubernetes"
    ],
    "title": "Definición pod mediante manifiesto",
    "uri": "/kubernetes-notes/pod/pod-minimal/index.html"
  },
  {
    "content": " Despliegue de cluster Ubuntu server LTS k8s minikube (driver kvm), en un simple host.\nTecnologías utilizadas minikube KVM Ubuntu LTS 22.04.. Especificación inicial …\nDependecias cumplida En este depliegue se implementa un cluster minikube sobre un simple host. El driver usado es un runtime kvm. Se da por supuesto que se ha instalado el host anfitrión KVM, ref: aquí dzamo.\nhttps://danielzamo.github.io/ubuntu-lts-server/kvm/index.html\nActualización sistema, instalando paquetes (opcionales) dzamo@ubuntu-k8s:~$ sudo apt -y update \u0026\u0026 sudo apt -y upgrade Instalación/configuración de minikube En este apartado se instala y configura un cluster minikube con driver kvm (REF LINK).\ndzamo@ubuntu-k8s:~$ # Instalacion minikube dzamo@ubuntu-k8s:~$ wget https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 dzamo@ubuntu-k8s:~$ sudo install minikube-linux-amd64 /usr/local/bin/minikube dzamo@ubuntu-k8s:~$ minikube version Instalación de kubectl dzamo@ubuntu-k8s:~$ sudo curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl \\ -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl dzamo@ubuntu-k8s:~$ sudo chmod 755 ./kubectl dzamo@ubuntu-k8s:~$ sudo mv kubectl /usr/local/bin/ dzamo@ubuntu-k8s:~$ kubectl version -o json --client ",
    "description": "Ubuntu server LTS, cluster k8s minikube (driver kvm)",
    "tags": [
      "kubernetes",
      "projects",
      "KVM",
      "UbuntuLTS",
      "minikube",
      "container",
      "virtualization"
    ],
    "title": "Minikube (driver kvm)",
    "uri": "/ubuntu-lts-server/minikube-kvm/index.html"
  },
  {
    "content": "Relevantes en esta nota Sección variables de entorno, definición env en manifiesto. Utilización de variables recuperadas desde kubernetes Downward API Manifiesto apiVersion: v1 kind: Pod metadata: name: nginx spec: containers: - name: nginx image: nginx:alpine env: - name: var_1 value: \"value_val_1\" - name: var_2 value: \"value_val_2\" - name: DD_AGENT_HOST valueFrom: fieldRef: fieldPath: status.hostIP env En la sección env se pueden definir/pasar variables de entornos. En lo anterior es:\nenv: # Variables de entorno - name: var_1 ## 'Nombre 1' value: \"value_val_1\" ## Valor variable 'Nombre 1' - name: var_2 ## 'Nombre 2' value: \"value_val_2\" ## Valor variable 'Nombre 2' - name: dd_agent_host ## Variable definida desde el \"Downward API\" (son variables/valores que se pueden consultar) valueFrom: fieldRef: fieldPath: status.hostIP ## Se asigna el valor de hostIP (su valor se recupera desde la \"Downward API\" de kubernetes) donde esta corriendo el pod, en este caso. Sesión comandos [dzamo@victus kubernetes]$ kubectl apply -f 03-pod-w-env.yaml [dzamo@victus kubernetes]$ kubectl get pod NAME READY STATUS RESTARTS AGE nginx-w-env 1/1 Running 0 18s [dzamo@victus kubernetes]$ kubectl exec nginx-w-env -- env PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin HOSTNAME=nginx-w-env NGINX_VERSION=1.25.1 PKG_RELEASE=1 NJS_VERSION=0.7.12 dd_agent_host=10.0.0.84 var_1=value_var_1 var_2=value_var_2 KUBERNETES_PORT=tcp://10.43.0.1:443 KUBERNETES_PORT_443_TCP=tcp://10.43.0.1:443 KUBERNETES_PORT_443_TCP_PROTO=tcp KUBERNETES_PORT_443_TCP_PORT=443 KUBERNETES_PORT_443_TCP_ADDR=10.43.0.1 KUBERNETES_SERVICE_HOST=10.43.0.1 KUBERNETES_SERVICE_PORT=443 KUBERNETES_SERVICE_PORT_HTTPS=443 HOME=/root [dzamo@victus kubernetes]$ kubectl exec -it nginx-w-env -- sh / # hostname nginx-w-env / # exit ",
    "description": "",
    "tags": [
      "documentation",
      "kubernetes"
    ],
    "title": "Sección env",
    "uri": "/kubernetes-notes/pod/env/index.html"
  },
  {
    "content": "Relevantes en esta nota Por medio de los resources es que se pueden asignan diferentes recursos a nuestros objetos. Dichos recursos pueden ser asignados a diferentes contenedores (no solo a los pod). Tipos de resources? Existen al menos 2 tipos de resources que se pueden asignar. Los tipos requests y los limits. La documentación mas completa se encuentra publicada en Resource Management for Pods and Containers. Manifiesto apiVersion: v1 kind: Pod metadata: name: nginx spec: containers: - name: nginx image: nginx:alpine env: - name: var_1 value: \"val_var_1\" - name: dd_agent_host valueFrom: fieldRef: fieldPath: status.hostIP resources: requests: memory: \"64Mi\" cpu: \"200m\" limits: memory: \"128Mi\" cpu: \"500m\" ports: - containerPort: 80 Tipos de resources Resuorces requests Son los recursos que garantizamos que siempre va a tener disponible el objeto. En el ejemplo:\n... resources: requests: memory: \"64Mi\" cpu: \"200m\" ... Donde:\nmemory: \"64Mi\": es la cantidad de memoria garantizada que tendrá disponible el objeto (pod o contenedor), en el ejemplo \"64Mi\" son 64 Megas bytes (la M esta en mayuscula). cpu: \"200m\": es la cantidad de mili cores que debe estar garantizado. A su vez 1000 mili core es equivalente a 1 core de CPU. De modo que si en el nodo/host se tiene un total de 10 core CPU la asignación requests de cpu: \"200m\" es que 2 core serán garantizados de disponible para el objeto. Sesión comandos ... ",
    "description": "",
    "tags": [
      "documentation",
      "kubernetes"
    ],
    "title": "Sección resources",
    "uri": "/kubernetes-notes/pod/resources/index.html"
  },
  {
    "content": " En Kubernetes definir/crear un daemonset hace que el pod/contenedor/es se ejecute en todos los nodos del cluster. Este tipo componente puede utilizarse, por ejemplo para aplicaciones que esten encargas de monitorizar los nodos del cluster kubernetes. Definición mediante manifiesto [dzamo@victus my-codes]$ cat kubernetes/03-daemonset.yaml apiVersion: apps/v1 kind: DaemonSet metadata: name: nginx-deployment spec: selector: matchLabels: app: nginx template: metadata: labels: app: nginx spec: containers: - name: nginx image: nginx:alpine ports: - containerPort: 80 Aplicar el manifiesto [dzamo@victus my-codes]$ kubectl apply -f kubernetes/03-daemonset.yaml Otros comandos [dzamo@victus kubernetes]$ kubectl apply -f codes-cli/03-daemonset.yaml [dzamo@victus kubernetes]$ kubectl get daemonset [dzamo@victus kubernetes]$ k get pods # El siguiente comando elimina el daemonset (de todos los nodos, y mediante el manifiesto. [dzamo@victus kubernetes]$ kubectl delete -f codes-cli/03-daemonset.yaml ",
    "description": "",
    "tags": [
      "documentation",
      "kubernetes"
    ],
    "title": "Daemonset",
    "uri": "/kubernetes-notes/pod/daemonset/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: container",
    "uri": "/tags/container/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: documentation",
    "uri": "/tags/documentation/index.html"
  },
  {
    "content": "En este sitio comparto algunos artículos, implementaciones y/o proyectos implementados.\nEste sitio esta generado con Hugo y utiliza inicialmente el theme Hugo Relearn Theme.\nAlgunos de los artículos y/o proyectos compartidos aquí son:\nKubernetes cluster k3sCluster kubernetes con k3s. 1 nodo master (control-plane) + 'N' nodos worker\nKubernetes - desplieguesAplicaciones y/o servicios de Kubernetes\nKubernetes - notasEntradas relacionadas a Kubernetes. Todo el código implementado y los casos de uso probados se encuentran disponible en el repositorio my-code del sitio de Gitlab.\nUbuntu server LTSUbuntu server LTS\n",
    "description": "",
    "tags": null,
    "title": "Inicio sitio",
    "uri": "/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: kubernetes",
    "uri": "/tags/kubernetes/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: KVM",
    "uri": "/tags/kvm/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: minikube",
    "uri": "/tags/minikube/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: projects",
    "uri": "/tags/projects/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: UbuntuLTS",
    "uri": "/tags/ubuntults/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tag :: virtualization",
    "uri": "/tags/virtualization/index.html"
  }
]
