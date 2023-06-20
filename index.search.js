var relearn_search_index = [
  {
    "content": "Entradas relacionadas a Kubernetes\n",
    "description": "",
    "tags": null,
    "title": "k8s",
    "uri": "/k8s/index.html"
  },
  {
    "content": "¿Qué es un pod? Un pod es el componente mas pequeño/atómico de Kubernetes. Los pod son set de contenedores. Un pod puede tener múltiples/varios contenedores, aunque normalmente solo contendrá 1. Creación de un pod desde el CLI El siguiente comando crea un pod. Para esto por ejemplo se puede ejecutar:\nkubectl create deployment deployment-pod-nginx-01 --image=nginx Manifiesto para crear 1 pod Normalmente se utilizan manifiestos, para crear los componentes para desplegar las aplicaciones en un cluster kubernetes. Estos están codificados en ficheros yaml. A continuación se especifica la creación de un pod (mínimo) mediante un fichero de este tipo. El código es el siguiente:\ncat 01-pod-minimal.md apiVersion: v1 kind: Pod metadata: name: nginx spec: containers: - name: nginx image: nginx:alpine Aplicando el manifiesto kubectl create -f 01-pod-minimal.md ",
    "description": "",
    "tags": [
      "k8s"
    ],
    "title": "Pod",
    "uri": "/k8s/pod/index.html"
  },
  {
    "content": " En Kubernetes definir/crear un daemonset hace que el componente se ejecute en todos los nodos del cluster. Este tipo componentes puede utilizarse por ejemplo para aplicaciones que monitorizan los nodos. Manifiesto de un daemonset básico [dzamo@victus kubernetes]$ cat codes-cli/03-daemonset.yaml apiVersion: apps/v1 kind: DaemonSet metadata: name: nginx-deployment spec: selector: matchLabels: app: nginx template: metadata: labels: app: nginx spec: containers: - name: nginx image: nginx:alpine ports: - containerPort: 80 Aplicar el manifiesto kubectl apply -f 03-daemonset.yaml Otros comandos [dzamo@victus kubernetes]$ kubectl apply -f codes-cli/03-daemonset.yaml [dzamo@victus kubernetes]$ kubectl get daemonset [dzamo@victus kubernetes]$ k get pods # El siguiente comando elimina el daemonset (de todos los nodos, y mediante el manifiesto. [dzamo@victus kubernetes]$ kubectl delete -f codes-cli/03-daemonset.yaml ",
    "description": "",
    "tags": [
      "documentation",
      "k8s"
    ],
    "title": "Daemonset",
    "uri": "/k8s/03-daemonset/index.html"
  },
  {
    "content": "En esta sección se muestra como definir un deployment.\nEste tipo de componentes de Kubernetes se ejecutaran sobre todos los nodos del cluster. Este tipo puede utilizarse por ejemplo para monitorizar los nodos (si están disponibles).\n",
    "description": "",
    "tags": [
      "documentation",
      "k8s"
    ],
    "title": "Deployment",
    "uri": "/kubernetes/04-deployment/index.html"
  },
  {
    "content": "En esta sección se muestra como definir un services.\nEste tipo de componentes de Kubernetes se ejecutaran sobre todos los nodos del cluster. Este tipo puede utilizarse por ejemplo para monitorizar los nodos (si están disponibles).\n",
    "description": "",
    "tags": [
      "documentation",
      "k8s"
    ],
    "title": "Services",
    "uri": "/kubernetes/05-services/index.html"
  },
  {
    "content": "En esta sección comparto artículos de Kubernetes.\n",
    "description": "",
    "tags": null,
    "title": "Kubernetes",
    "uri": "/kubernetes/index.html"
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
    "title": "Tag :: k8s",
    "uri": "/tags/k8s/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
