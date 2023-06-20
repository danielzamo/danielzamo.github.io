# Kubernetes running examples

## Objetivos

> En este README.md se intenta resumir algunos de los comandos de las sesiones de trabajo donde fueron utilizados en código que también se deja compartido aquí.

## Sesiones de trabajo ejecutadas

```bash
 # my-codes/kubernetes/01-pod-minimal
 alias k='kubectl'
 k get pods
 k apply -f my-codes/kubernetes/01-pod-minimal.yaml 
 k get pods
 k exec -it nginx -- sh
 k delete pod nginx
 k get pods
 # //END: ...01-pod-minimal
 ``` 

```bash
# my-codes/kubernetes/02-pod-deployment-cli.sh 
k get pods
k get deployments
k get deployment
bash my-codes/kubernetes/02-pod-deployment-cli.sh 
k get pods
k get deployments
## Borrar el pod (Al ser un deployment, kubernetes debería volver a levantarlo)
k delete pod nginx-pod-deployment-cli-cbcdfb8f4-fn9kr
k get pods
## Borrar el pod - deployment
k delete deployment nginx-pod-deployment-cli
# //END: ...02-pod-deployment-cli.sh
```
