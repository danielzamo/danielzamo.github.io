#!/usr/bin/env bash
#
save_session_actual(){
    local my_sesion=sesion_actual_$(date +%F).log
    echo -e "Para grabar la sesión de comandos actuales salir con CTRL+D y \nel historial queda en ${my_sesion}" 
    script --t=/tmp/script_log -q -a ${my_sesion}
}
