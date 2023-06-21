var relearn_search_index = [
  {
    "content": "Entradas relacionadas a Kubernetes.\nTodo el código implementado y los casos de uso probados se encuentran disponible en el repositorio my-code del sitio de Gitlab.\n",
    "description": "",
    "tags": null,
    "title": "kubernetes",
    "uri": "/kubernetes/index.html"
  },
  {
    "content": "¿Qué es un pod? Un pod es un set de contenedor/es. Un pod es el componente mas pequeño/atómico de Kubernetes. Un pod puede tener múltiples/varios contenedores, aunque normalmente solo contendrá 1. Creación de un pod desde el CLI El siguiente comando crea un pod, como un deployment. Para esto por ejemplo se puede ejecutar:\nkubectl create deployment deployment-pod-nginx-01 --image=nginx Algunos comandos Matando el pod Para matar el anterior pod se puede ejecutar:\n[dzamo@victus my-readings] alias k='kubectl' # pods en ejecución [dzamo@victus my-readings] k get pods # eliminar el pod del deployment [dzamo@victus my-readings] k delete pod deployment-pod-nginx-01-77c5f959c5-z4hfn Borrar el deployment (borrar el pod) [dzamo@victus my-readings] alias k='kubectl' # pods en ejecución [dzamo@victus my-readings] k get deployments # eliminar el pod del deployment [dzamo@victus my-readings] k delete deployment deployment-pod-nginx-01 [dzamo@victus my-readings] k get deployments Al haber sido credo con el comando kubectl create deployment .... , el orquetador Kubernetes vuelve a levantar el pod.\nCreación de pod desde un manifiesto (mínimo) Normalmente se utilizan manifiestos, para crear los componentes para desplegar las aplicaciones en un cluster kubernetes. Estos están codificados en ficheros yaml. A continuación se especifica la creación de un pod (mínimo) mediante un fichero de este tipo. El código es el siguiente:\ncat 01-pod-minimal.md apiVersion: v1 kind: Pod metadata: name: nginx spec: containers: - name: nginx image: nginx:alpine Aplicando el manifiesto Para aplicar (crear el pod) se puede ejecutar:\nkubectl create -f 01-pod-minimal.md Nota: Observar en el manifiesto se ha utilizado kind: Pod una vez corriendo el propio pod si se lo borra (kubectl delete ....) el pod se destruye/borra y Kubernetes no lo volvera a levantar (los de tipo kind: Pod simplemente se destruyen).\n",
    "description": "",
    "tags": [
      "kubernetes",
      "documentation"
    ],
    "title": "Pod",
    "uri": "/kubernetes/pod/index.html"
  },
  {
    "content": "Manifiesto mínimo [dzamo@victus my-codes]$ cat kubernetes/01-pod-minimal.yaml apiVersion: v1 kind: Pod metadata: name: nginx spec: containers: - name: nginx image: nginx:alpine Aplicando manifiesto (crear pod) [dzamo@victus my-codes]$ kubectl apply -f kubernetes/01-pod-minimal.yaml ",
    "description": "",
    "tags": [
      "documentation",
      "kubernetes"
    ],
    "title": "Definición pod mediante manifiesto",
    "uri": "/kubernetes/pod/pod-minimal/index.html"
  },
  {
    "content": "Relevantes en esta nota Sección variables de entorno, definición env en manifiesto. Utilización de variables recuperadas desde kubernetes Downward API Manifiesto apiVersion: v1 kind: Pod metadata: name: nginx spec: containers: - name: nginx image: nginx:alpine env: - name: var_1 value: \"value_val_1\" - name: var_2 value: \"value_val_2\" - name: DD_AGENT_HOST valueFrom: fieldRef: fieldPath: status.hostIP env En la sección env se pueden definir/pasar variables de entornos. En lo anterior es:\nenv: # Variables de entorno - name: var_1 ## 'Nombre 1' value: \"value_val_1\" ## Valor variable 'Nombre 1' - name: var_2 ## 'Nombre 2' value: \"value_val_2\" ## Valor variable 'Nombre 2' - name: dd_agent_host ## Variable definida desde el \"Downward API\" (son variables/valores que se pueden consultar) valueFrom: fieldRef: fieldPath: status.hostIP ## Se asigna el valor de hostIP (su valor se recupera desde la \"Downward API\" de kubernetes) donde esta corriendo el pod, en este caso. Sesión comandos [dzamo@victus kubernetes]$ kubectl apply -f 03-pod-w-env.yaml [dzamo@victus kubernetes]$ kubectl get pod NAME READY STATUS RESTARTS AGE nginx-w-env 1/1 Running 0 18s [dzamo@victus kubernetes]$ kubectl exec nginx-w-env -- env PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin HOSTNAME=nginx-w-env NGINX_VERSION=1.25.1 PKG_RELEASE=1 NJS_VERSION=0.7.12 dd_agent_host=10.0.0.84 var_1=value_var_1 var_2=value_var_2 KUBERNETES_PORT=tcp://10.43.0.1:443 KUBERNETES_PORT_443_TCP=tcp://10.43.0.1:443 KUBERNETES_PORT_443_TCP_PROTO=tcp KUBERNETES_PORT_443_TCP_PORT=443 KUBERNETES_PORT_443_TCP_ADDR=10.43.0.1 KUBERNETES_SERVICE_HOST=10.43.0.1 KUBERNETES_SERVICE_PORT=443 KUBERNETES_SERVICE_PORT_HTTPS=443 HOME=/root [dzamo@victus kubernetes]$ kubectl exec -it nginx-w-env -- sh / # hostname nginx-w-env / # exit ",
    "description": "",
    "tags": [
      "documentation",
      "kubernetes"
    ],
    "title": "Sección env",
    "uri": "/kubernetes/pod/env/index.html"
  },
  {
    "content": "Relevantes en esta nota Sección variables de entorno, definición env en manifiesto.\nPor medio de los resources es que se pueden asignan diferentes recursos a nuestros objetos (contenedores y/o pod).\nDichos recursos pueden ser asignados a diferentes contenedores.\nTipos de resources?\nExisten al menos 2 tipos de resources que se pueden asignar. Los tipos requests y los limits. URL Resource Management for Pods and Containers.\nManifiesto Tipos de resources Resuorces requests Son los recursos que garantizamos que siempre va a tener disponible el objeto. En el ejemplo:\n... resources: requests: memory: \"64Mi\" cpu: \"200m\" ... Donde:\nmemory: \"64Mi\": es la cantidad de memoria garantizada que tendrá disponible el objeto (pod o contenedor), en el ejemplo \"64Mi\" son 64 Megas bytes (la M esta en mayuscula). cpu: \"200m\": es la cantidad de mili cores que debe estar garantizado. A su vez 1000 mili core es equivalente a 1 core de CPU. De modo que si en el nodo/host se tiene un total de 10 core CPU la asignación requests de cpu: \"200m\" es que 2 core serán garantizados de disponible para el objeto. Sesión comandos ... ",
    "description": "",
    "tags": [
      "documentation",
      "kubernetes"
    ],
    "title": "Sección resources",
    "uri": "/kubernetes/pod/resources/index.html"
  },
  {
    "content": " En Kubernetes definir/crear un daemonset hace que el pod/contenedor/es se ejecute en todos los nodos del cluster. Este tipo componente puede utilizarse, por ejemplo para aplicaciones que esten encargas de monitorizar los nodos del cluster kubernetes. Definición mediante manifiesto [dzamo@victus my-codes]$ cat kubernetes/03-daemonset.yaml apiVersion: apps/v1 kind: DaemonSet metadata: name: nginx-deployment spec: selector: matchLabels: app: nginx template: metadata: labels: app: nginx spec: containers: - name: nginx image: nginx:alpine ports: - containerPort: 80 Aplicar el manifiesto [dzamo@victus my-codes]$ kubectl apply -f kubernetes/03-daemonset.yaml Otros comandos [dzamo@victus kubernetes]$ kubectl apply -f codes-cli/03-daemonset.yaml [dzamo@victus kubernetes]$ kubectl get daemonset [dzamo@victus kubernetes]$ k get pods # El siguiente comando elimina el daemonset (de todos los nodos, y mediante el manifiesto. [dzamo@victus kubernetes]$ kubectl delete -f codes-cli/03-daemonset.yaml ",
    "description": "",
    "tags": [
      "documentation",
      "kubernetes"
    ],
    "title": "Daemonset",
    "uri": "/kubernetes/pod/daemonset/index.html"
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
    "title": "Tag :: documentation",
    "uri": "/tags/documentation/index.html"
  },
  {
    "content": "En este sitio comparto algunos artículos e implementaciones que utilizo como referencias de estudio o lectura.\nEl sitio esta generado con Hugo y utiliza el theme Hugo Relearn Theme.\n",
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
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
