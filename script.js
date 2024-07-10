
const data = [
    {
        medidaENS: "Org.1",
        descripcionENS: "Política de seguridad",
        compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "5.1 Políticas para la seguridad de la información. <br> 5.36 Cumplimiento de las políticas y normas de seguridad de la información. <br> 5.2 Roles y responsabilidades en seguridad de la información. <br> 6.4 Proceso disciplinario. <br> 5.31 Identificación de requisitos legales, reglamentarios y contractuales.",
                documentacion: "Política de seguridad de la información única con los criterios que exige cada norma. <br> - Debe estar aprobada por el Comité de Seguridad. <br> - Se debe publicar y difundir internamente.",
                observaciones: "Se debe incluir en la Política ya existente: <br>- Legislación aplicable. <br>- Roles y funciones no incluidos en ISO 27001 (Responsable de sistemas de información, Responsable de servicios, Responable de Información). <br>- Estructura del Comité de Seguridad.<br><br> Importante disponer de: <br> - Un acta de constitución del Comité de Seguridad y designación inicial de sus miembros y aceptación de las responsabilidades.<br> - Diferentes actas de designación y/o cese de miembros del Comité de Seguridad a lo largo del tiempo. <br> - Documento de aceptación de las funciones de los roles del ENS y miembros del Comité de Seguridad"
            }
        ]
    },
    {
        medidaENS: "Org.2",
        descripcionENS: "Normativa de seguridad",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "5.10 Uso aceptable de la información y activos asociados. <br> 5.10 Uso aceptable de la información y activos asociados.<br> 5.6 Contacto con grupos de interés especial. <br> 5.11 Devolución de activos. <br> 5.24 Planificación y preparación de la gestión de incidentes de seguridad de la información.<br> 5.36 Cumplimiento de las políticas y normas de seguridad de la información. <br> 6.7 Teletrabajo. <br> 7.7 Puesto de trabajo despejado y pantalla limpia. <br> 7.9 Seguridad de los equipos fuera de las instalaciones. <br> 8.1 Dispositivos finales de usuario.",
                documentacion: "Normativa de seguridad de la información única para todos los usuarios donde se indiquen sus obligaciones en materia de seguridad de la información. <br> Se puede tener en cuenta aspectos como:<br>- Uso de internet. <br>- Soportes externos. <br>- Normativa sobre escritorios limpios. <br>- Uso del correo electrónico.",
                observaciones: "Integrar toda la normativa de seguridad. <br>- Debe estar aprobada por el Comité de Seguridad y aceptada por todo el personal. <br>- Evidenciar que la normativa de seguridad se ha elaborado siguiendo las guías CCN-STIC."
            }
        ]
    },
    {
        medidaENS: "Org.3",
        descripcionENS: "Procedimientos de seguridad",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "5.37  Documentación de procedimientos operacionales",
                documentacion: "Procedimientos de seguridad (Gestión de incidentes, Gestión del cambio, tratamiento de la información en función de su nivel de seguridad, etc.", 
                observaciones: "Los procedimientos ya deberían existir por la norma ISO27001. Deben estar aprobados y divulgados internamente."
            }
        ]
    },
    {
        medidaENS: "Org.4",
        descripcionENS: "Proceso de autorización",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "5.2  Roles y responsabilidades en seguridad de la información. <br> Clausula 5.3 Roles, responsabilidades y autoridades en seguridad de la información. <br> 8.1 Dispositivos finales de usuario. <br> 5.10 Uso aceptable de la información y activos asociados.<br>  7.10 Soportes de almacenamiento. <br> 8.19 Instalación del software en sistemas de producción. <br> 8.20 Seguridad de redes. <br> 8.21 Seguridad de los servicios de red. <br> 8.32 Gestión de cambios.",
                documentacion: "Procedimientos donde se refleje el protocolo a seguir para dar autorización de acceso a instalaciones, aplicaciones, sistemas,etc.",
                observaciones: "Asegurar que cualquier proceso de autorización que pueda darse en la empresa dispone de su procedimiento. <br><br> Es importante tener evidencia de las peticiones de autorización (p.e. herramienta de ticketing).<br>- Deben estar aprobados y divulgados internamente."
            }
        ]
    },
    {
        medidaENS: "Op.pl.1",
        descripcionENS: "Análisis de riesgos",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "6.1 – Acciones para tratar los riesgos y oportunidades. <br> 8.2 – Evaluación de los riesgos de seguridad de la información. <br> 8.3 – Tratamiento de los riesgos de seguridad de la información",
                documentacion: "Metodología de análisis de riesgos, Informe de análisis de riesgos y Plan de tratamiento de riesgos",
                observaciones: "Con la documentación existente en ISO27001, es suficiente. <br>- El Comité de Seguridad debe aprobar el nivel de riesgo asumible y el plan de tratamiento de riesgos. <br>- La metodología debe explicar detalladamente cómo se valoran los activos, qué amenazas aplican a cada activo, cómo se calcula el riesgo, etc."
            }
         ]
    },
  {
        medidaENS: "Op.pl.2",
        descripcionENS: "Arquitectura de seguridad",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "8.27 Arquitectura segura de sistemas y principios de ingeniería",
                documentacion: "Documentación que incluya: <br> - Descripción de la Arquitectura de Seguridad:<br>- Mapa de la red que incluya segmentación, zonas de seguridad, y los dispositivos de red principales.<br>- Identificación de los sistemas y servicios críticos, describiendo su ubicación dentro de la arquitectura.",
                observaciones: "Con lo implantado en la norma ISO 27001, es suficiente: <br> Los controles de Seguridad que deberían estar implementados:<br>- Detalles sobre las medidas de protección física, técnica y administrativa aplicadas.<br>- Enumeración de los dispositivos y software de seguridad utilizados (firewalls, sistemas de detección y prevención de intrusiones, antivirus, etc."
            }
        ]
    },
    {
        medidaENS: "Op.pl.3",
        descripcionENS: "Adquisición de nuevos componentes",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "5.8 Seguridad de la información en la gestión de proyectos. <br> 5.19 Seguridad de la información en las relaciones con los proveedores. <br> 5.20 Abordar la seguridad de la información dentro de los acuerdos con proveedores.",
                documentacion: "Actualizar los procedimientos de contratación existentes con la norma ISO 27001 incluyendo la necesidad de definir los requisitos de seguridad de los componentes antes de la adquisición.",
                observaciones: "Incluir los requisitos de seguridad en los pliegos de condiciones y especificaciones técnicas de los procesos de adquisición."
            }
        ]
    },
    {
        medidaENS: "Op.pl.4",
        descripcionENS: "Dimensionamiento/gestión de la capacidad",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "8.6 Gestión de capacidades",
                documentacion: "Plan de capacidad existente ya con la ISO27001",
                observaciones: "No hay que implantar nada nuevo. Como recordatorio:<br>- Es necesario evidenciar que se ha realizado un estudio previo de capacidad, contemplando todos los aspectos necesarios. <br> - En las nuevas adquisiciones, demostrar que han sido dimensionadas conforme al estudio previo.<br>- Contar con herramientas para el monitoreo de los sistemas."
            }
          ]
    },
    {
        medidaENS: "Op.pl.5",
        descripcionENS: "Componentes certificados",
	compatibilidad: "Nula",
        controlesISO: [
            {
                controlISO: "No se contempla expresamente",
                documentacion: "Procedimiento para que en cada adquisición, se tenga en cuenta que los productos deben estar certificados",
                observaciones: "Si un producto no está certificado por el CCN, es decir, no está en el catálogo CPSTIC, verificar si dispone de certificados common criteria o similares. En caso contrario, seguir las guías de taxonomía del CCN. <br>Ademas: <br>-  Elaborar un plan de acción para los componentes que ya se han adquirido y no están certificados."
            }
          ]
    },
    {
        medidaENS: "Op.acc.1",
        descripcionENS: "Identificación",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "5.16  Gestión de identidad",
                documentacion: "Política de Control de Accesos",
                observaciones: "Con lo dispuesto en ISO27001 es suficiente: <br>- Métodos de identificación. <br>- Identificadores únicos. <br>- Deshabilitación de cuentas y su control hasta la supresión definitiva. <br>- Protocolo para las bajas de usuarios <br>- Procedimiento formal de bajas de usuarios <br>- Listas actualizadas de usuarios para acceder a diferentes recursos"
            }
          ]
    },
    {
        medidaENS: "Op.acc.2",
        descripcionENS: "Requisitos de acceso",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "5.15  Control de acceso",
                documentacion: "Política de Gestión de Permisos y Privilegios",
                observaciones: "Con lo dispuesto en ISO27001 es suficiente: <br>- Mecanismos de protección de los recursos.<br>- Asignación de responsables de los recursos. <br>- Criterios de acceso a los recursos."
            }
          ]
    },
    {
        medidaENS: "Op.acc.3",
        descripcionENS: "Segregación de funciones y tareas",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "5.3  Segregación de tareas",
                documentacion: "Organigrama detallado de la organización que evidencie la segregación de funciones",
                observaciones: "Con el organigrama existente en ISO27001 es suficiente. <br> Interesante disponer de un inventario de operaciones, que permita diferenciar las segregaciones."
            }
          ]
    },
    {
        medidaENS: "Op.acc.4",
        descripcionENS: "Proceso de gestión de derechos de acceso",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "5.18 Derechos de acceso. 8.2 Gestión de privilegios de acceso",
                documentacion: "Política de control de acceso y política de acceso remoto, incluyendo los principios de mínimo privilegio y separación de funciones.",
                observaciones: "Con lo existente en ISO 27001 es suficiente. Importante recordar que: <br>- Es necesario evidenciar auditorías de revisión de los permisos de acceso y concesiones y revocaciones de accesos por el personal autorizado."
            }
          ]
    },
    {
        medidaENS: "Op.acc.5",
        descripcionENS: "Mecanismo de autenticación (usuarios externos)",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "5.18 Derechos de acceso. <br> 8.5 Autenticación segura",
                documentacion: "- Proceso de entrega y aceptación de credenciales por los usuarios.<br>- Proceso para deshabilitar o retirar credenciales a los usuarios. <br>- Políticas técnicas configuradas mostrando cómo se limita el número de intentos y se fuerza cambio de credenciales. <br>- Política técnica configurada mostrando complejidad de contraseñas acorde con la política establecida.", 
                observaciones: "- Aplicar un segundo factor de autenticación. <br>- Registrar los accesos con éxito y los fallidos. <br>- Informar al usuario del último acceso efectuado con su identidad."
            }
          ]
    }, 
    {
        medidaENS: "Op.acc.6",
        descripcionENS: "Mecanismo de autenticación (usuarios internos)",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "8.5  Autenticación segura",
                documentacion: "- Proceso de entrega y aceptación de credenciales por los usuarios.<br>- Proceso para deshabilitar o retirar credenciales a los usuarios. <br>- Políticas técnicas configuradas mostrando cómo se limita el número de intentos y se fuerza cambio de credenciales. <br>- Política técnica configurada mostrando complejidad de contraseñas acorde con la política establecida.", 
                observaciones: "- Importante aplicar un segundo factor de autenticación en zonas no controladas. <br>- Registrar los accesos con éxito y los fallidos. <br>- Informar al usuario del último acceso efectuado con su identidad."
            }
          ]
    },
{
        medidaENS: "Op.exp.1",
        descripcionENS: "Inventario de activos",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "5.9 Inventario de información y otros activos asociados",
                documentacion: "Normativa de gestión de activos.",
                observaciones: "Al igual que en ISO 27001, debe existir un inventario de activos. Lo ideal es que exista una CMDB. Si no es así, deberán existir inventarios manuales que estén actualizados y que incluyan dependencias entre ellos."
            }
          ]
    },
    {
        medidaENS: "Op.exp.2",
        descripcionENS: "Configuración de seguridad",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "8.9 Gestión de la configuración",
                documentacion: "- Normativa de seguridad operativa. <br>- Guías de bastionado de los equipos",
                observaciones: "Puntos clave en ENS: <br>- Considerar los requisitos de seguridad necesarios, las guías del CCN-STIC y las herramientas del CCN. <br>- Documentación de configuraciones Seguras para todos los sistemas y servicios. <br>- Estas configuraciones deben ser implementadas y mantenidas. <br>- Se deben realizar revisiones periódicas de las configuraciones para asegurar que se mantengan seguras y actualizadas. <br>-  Se debe controlar y registrar cualquier cambio en la configuración para asegurar que no se introduzcan vulnerabilidades."
            }
          ]
    },
    {
        medidaENS: "Op.exp.3",
        descripcionENS: "Gestión de la configuración de seguridad",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "8.9 Gestión de la configuración",
                documentacion: "- Guías de bastionado. <br>- Documentación de herramientas que ayuden a gestionar posibles desviaciones o vulnerabilidades",
                observaciones: "Importante disponer de: <br> -Registros que evidencien la gestión continua de la configuración de seguridad. <br>- Informes de Auditoria de bastionado"
            }
          ]
    },
    {
        medidaENS: "Op.exp.4",
        descripcionENS: "Mantenimiento y actualizaciones de seguridad",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "7.13 Mantenimiento de equipos. 8.8 Gestión de Vulnerabilidades técnicas",
                documentacion: "Procedimiento para la identificación de vulnerabilidades en productos y servicios.",
                observaciones: "La gestión de vulnerabilidades técnicas debe estar alineado con la gestión de incidentes. <br><br> Importante tener en cuenta diferentes posibilidades: <br>- Utilizar herramientas de escaneo de vulnerabilidades. <br>- Pruebas de penetración. <br> Pruebas de penetración."
            }
          ]
    },
    {
        medidaENS: "Op.exp.5",
        descripcionENS: "Gestión del cambio",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "8.32 Gestión de cambios",
                documentacion: "Procedimiento de gestión de cambios.",
                observaciones: "Con los procedimientos existentes en ISO 27001 es suficiente. Como recordatorio, el procedimiento debe incluir: <br>- planificación y evaluación del impacto potencial de los cambios. <br>- comunicaciones a las partes interesadas, pruebas y aceptación de pruebas."
            }
          ]
    },
    {
        medidaENS: "Op.exp.6",
        descripcionENS: "Protección frente a código dañino ",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "8.7 Controles contra el código malicioso",
                documentacion: "Procedimientos de gestión de la protección antimalware.",
                observaciones: "Con los procedimientos existentes en ISO 27001 es suficiente."
            }
          ]
    },
    {
        medidaENS: "Op.exp.7",
        descripcionENS: "Gestión de incidentes ",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "5.24 Planificación y preparación de la gestión de incidentes de seguridad. 5.25Evaluación y decisión sobre los eventos de seguridad de la información",
                documentacion: "Procedimiento de gestión de incidentes",
                observaciones: "Asegurar que el procedimiento existente esté alineada con la Guía CCN-STIC 817 y tenga en cuenta la plataforma LUCIA. <br><br> El procedimiento debe ser integral frente a incidentes de seguridad.<br><br> Es necesario incluir un protocolo para la comunicación de pérdida o robo de dispositivos y portátiles."
            }
          ]
    },
    {
        medidaENS: "Op.exp.8",
        descripcionENS: "Registro de la actividad",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "8.15 Registros de eventos. 8.17 Sincronización de reloj ",
                documentacion: "Normativa de seguridad operativa.",
                observaciones: "Los registros de auditoría tendrán el identificador del usuario, fecha y hora, información afectada, tipo de evento y su resultado (fallo o éxito). <br><br> No es necesario disponer de una herramienta SIEM pero es necesario tener un proceso de revisión informal."
            }
          ]
    },
    {
        medidaENS: "Op.exp.9",
        descripcionENS: "Registro de la gestión de incidentes",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "5.24 Planificación y preparación de la gestión de incidentes de seguridad de la información. 5.28 Recolección de evidencia",
                documentacion: "-Procedimiento de gestión de incidentes. <br>- Registro de incidentes",
                observaciones: "Hay que cumplir con la Guía CCN STIC 817 y utilizar la herramienta LUCIA."
            }
          ]
    },
    {
        medidaENS: "Op.exp.10",
        descripcionENS: "Protección de claves criptográficas",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "8.24 Uso de la criptografía",
                documentacion: "Normativa de cifrado.",
                observaciones: "Para cumplir con el ENS es necesario considerar la Guía CCN STIC 807 y CCN STIC 221."
            }
          ]
    },
    {
        medidaENS: "Op.ext.1",
        descripcionENS: "Contratación y acuerdos de nivel de servicio",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: " 5.19 Seguridad de la información en las relaciones con los proveedores. 5.20 Abordar la seguridad de la información dentro de los acuerdos con los proveedores",
                documentacion: "Normativa o procedimientos de gestión de proveedores.",
                observaciones: "Es necesario incluir en los contratos los acuerdos de nivel de servicio establecidos."
            }
          ]
    },
    {
        medidaENS: "Op.ext.2",
        descripcionENS: "Gestión diaria",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "5.22  Seguimiento, revisión y gestión del cambio de los servicios de los proveedores",
                documentacion: "Normativa o procedimientos de gestión de proveedores.",
                observaciones: "Incluir en la documentación y contratos con proveedores la necesidad de que los proveedores envíen informes mensuales de seguimiento del servicio para verificar que cumplen con los requisitos solicitados. "
            }
          ]
    },
    {
        medidaENS: "Op.ext.3",
        descripcionENS: "Protección de la cadena de suministro",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "5.21 Gestión de la seguridad de la información en la cadena de suministro de las TIC ",
                documentacion: "Normativa o procedimientos de gestión de proveedores.",
                observaciones: "No aplica para ENS nivel MEDIO."
            }
          ]
    },
    {
        medidaENS: "Op.ext.4",
        descripcionENS: "Interconexión de sistemas",
	compatibilidad: "Nula",
        controlesISO: [
            {
                controlISO: "8.22 Segregación en redes",
                documentacion: "Documentación de interconexión de sistemas.",
                observaciones: "Cumplir con la Guía de Seguridad de las TIC CCN-STIC 811."
            }
          ]
    },
    {
        medidaENS: "Op.nub.1",
        descripcionENS: "Protección de servicios en la nube",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "5.23 Seguridad de la información para el uso de servicios en la nube",
                documentacion: "Procedimientos de contratación.",
                observaciones: "Al procedimiento ya existente en ISO 27001 es necesario incluir la necesidad de solicitar al proveedor la certificación correspondiente del ENS nivel MEDIO.<br><br> Si es un servicio de seguridad, se deberá exigir que el servicio esté certificado, es decir, cumplir con la medida op.pl.5."
            }
          ]
    },
    {
        medidaENS: "Op.cont.1",
        descripcionENS: "Análisis de impacto",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "5.29 Seguridad de la información durante la interrupción. 5.30 Preparación para las TIC para la continuidad del negocio",
                documentacion: "- Normativa o procedimiento de gestión de continuidad.<br>- BIA ",
                observaciones: "La documentación existente en ISO 27001 es suficiente."
            }
          ]
    },
    {
        medidaENS: "Op.cont.2",
        descripcionENS: "Plan de continuidad",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "5.29 Seguridad de la información durante la interrupción. 5.30 Preparación para las TIC para la continuidad del negocio ",
                documentacion: "Plan de continuidad",
                observaciones: "No aplica para nivel medio ENS"
            }
          ]
    },
    {
        medidaENS: "Op.cont.3",
        descripcionENS: "Pruebas periódicas",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "5.30 Preparación para las TIC para la continuidad del negocio ",
                documentacion: "Informes de pruebas de continuidad.",
                observaciones: "No aplica para nivel medio ENS"
            }
          ]
    },
    {
        medidaENS: "Op.cont.4",
        descripcionENS: "Medios alternativos",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "8.14  Redundancia de los recursos de tratamiento de la información ",
                documentacion: "Sistema de Gestión de Continuidad de Negocio.",
                observaciones: "No aplica para nivel medio ENS"
            }
          ]
    },
    {
        medidaENS: "Op.mon.1",
        descripcionENS: "Detección de intrusión",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "8.21 Seguridad de los servicios de red ",
                documentacion: "Normativa de seguridad de las comunicaciones.",
                observaciones: "Es importante implementar sistemas que permitan detectar y prevenir intrusiones mediante reglas específicas. Para ello, los dispositivos de red deben estar configurados adecuadamente para realizar tareas de monitorización. Además, los servicios SaaS deberán incluir estas medidas de seguridad como una característica estándar de su oferta."
            }
          ]
    },
    {
        medidaENS: "Op.mon.2",
        descripcionENS: "Sistema de métricas",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "9 – Evaluación del desempeño. 9.1 – Seguimiento, medición, análisis y evaluación",
                documentacion: "Informe INES.",
                observaciones: "Cumplimentar el informe INES y hacer seguimiento a dichos indicadores."
            }
          ]
    },
    {
        medidaENS: "Op.mon.3",
        descripcionENS: "Vigilancia",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "5.7 Inteligencia de amenazas. 8.16 Seguimiento de actividades ",
                documentacion: "Normativa de seguridad operativa.",
                observaciones: "Es necesario que el sistema automático de recolección y correlación de eventos de seguridad esté certificado, es decir, cumpla con la medida op.pl.5."
            }
          ]
    },
    {
        medidaENS: "mp.if.1",
        descripcionENS: "Área separada y con control de accesos",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "7.1 Perímetro de seguridad física ",
                documentacion: "Normativa de seguridad física.",
                observaciones: "Con la documentación existente y las medidas implantadas en ISO 27001 es suficiente."
            }
          ]
    },
    {
        medidaENS: "mp.if.2",
        descripcionENS: "Identificación de personas",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "7.2  Controles físicos de entrada",
                documentacion: "Normativa de seguridad física.",
                observaciones: "Con la documentación existente y las medidas implantadas en ISO 27001 es suficiente."
            }
          ]
    },
    {
        medidaENS: "mp.if.3",
        descripcionENS: "Acondicionamiento de los locales",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "7.5 Protección contra las amenazas externas y ambientales.<br> 7.8 Emplazamiento y protección de equipos. <br>7.3 Seguridad de oficinas, despachos y recursos.<br> 7.6 El trabajo en áreas seguras.<br> 7.12 Seguridad del cableado",
                documentacion: "Normativa de seguridad física.",
                observaciones: "Con la documentación existente y las medidas implantadas en ISO 27001 es suficiente."
            }
          ]
    },
    {
        medidaENS: "mp.if.4",
        descripcionENS: "Energía eléctrica",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "7.11 Instalaciones de suministro ",
                documentacion: "Normativa de seguridad física.",
                observaciones: "Con la documentación existente y las medidas implantadas en ISO 27001 es suficiente."
            }
          ]
    },
    {
        medidaENS: "mp.if.5",
        descripcionENS: "Protección frente a incendios",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "7.5 Protección contra las amenazas externas y ambientales",
                documentacion: "Normativa de seguridad física.",
                observaciones: "Con la documentación existente y las medidas implantadas en ISO 27001 es suficiente."
            }
          ]
    },
    {
        medidaENS: "mp.if.6",
        descripcionENS: "Protección frente a inundaciones",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "7.5 Protección contra las amenazas externas y ambientales",
                documentacion: "Normativa de seguridad física.",
                observaciones: "Con la documentación existente y las medidas implantadas en ISO 27001 es suficiente."
            }
          ]
    },
    {
        medidaENS: "mp.if.7",
        descripcionENS: "Registro de entrada y salida de equipamiento",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "7.2 Controles físicos de entrada",
                documentacion: "Procedimiento de entrega de material informático",
                observaciones: "Con la documentación existente y las medidas implantadas en ISO 27001 es suficiente."
            }
          ]
    },
    {
        medidaENS: "mp.per.1",
        descripcionENS: "Caracterización del puesto de trabajo",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "6.1 Comprobación",
                documentacion: "Perfiles de puesto de trabajo.",
                observaciones: "Con la documentación existente y las medidas implantadas en ISO 27001 es suficiente."
            }
          ]
    },
    {
        medidaENS: "mp.per.2",
        descripcionENS: "Deberes y obligaciones",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "6.2  Términos y condiciones de contratación",
                documentacion: "Normativa de obligaciones de las personas usuarias.",
                observaciones: "Como extra a la ISO 27001,se requiere la firma de compromisos de cumplimiento de las normativas de seguridad."
            }
          ]
    },
    {
        medidaENS: "mp.per.3",
        descripcionENS: "Concienciación y formación",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "6.3 Concienciación, educación y formación en seguridad de la información ",
                documentacion: "Plan de formación y concienciación.",
                observaciones: "Con la documentación existente y las medidas implantadas en ISO 27001 es suficiente."
            }
          ]
    },
    {
        medidaENS: "mp.per.4",
        descripcionENS: "Formación",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "6.3 Concienciación, educación y formación en seguridad de la información ",
                documentacion: "Plan de formación y concienciación.",
                observaciones: "Con la documentación existente y las medidas implantadas en ISO 27001 es suficiente. <br> Interesante tener en cuenta la herramienta Ángeles del CCN."
            }
          ]
    },
    {
        medidaENS: "mp.eq.1",
        descripcionENS: "Puesto de trabajo despejado",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "7.7 Puesto de trabajo despejado y pantalla limpia",
                documentacion: "Normativa de obligaciones de las personas usuarias.",
                observaciones: "Con la documentación existente y las medidas implantadas en ISO 27001 es suficiente."
            }
          ]
    },
    {
        medidaENS: "mp.eq.2",
        descripcionENS: "Bloqueo de puesto de trabajo",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "7.7 Puesto de trabajo despejado y pantalla limpia",
                documentacion: "Normativa de obligaciones de las personas usuarias.",
                observaciones: "Con la documentación existente y las medidas implantadas en ISO 27001 es suficiente. <br> Tener en cuenta la existencia de la herramienta Clara del CCN."
            }
          ]
    },
    {
        medidaENS: "mp.eq.3",
        descripcionENS: "Protección de dispositivos portátiles",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "7.9 Seguridad de los equipos fuera de las instalaciones. 8.1 Dispositivos finales de usuario. <br> 5.9 Inventario de información y otros activos asociados. <br> 5.12 Clasificación de información 5.24 Planificación y preparación de la gestión de incidentes de seguridad de la información.<br> 5.25 Evaluación y decisión sobre los eventos de seguridad de la información.",
                documentacion: "Normativa de obligaciones de las personas usuarias.",
                observaciones: "Para cumplir con un nivel Medio es suficiente con lo implantado en ISO 27001."
            }
          ]
    },
    {
        medidaENS: "mp.eq.4",
        descripcionENS: "Otros dispositivos conectados a la red",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "8.1 Dispositivos finales de usuario ",
                documentacion: "Normativa de obligaciones de las personas usuarias.",
                observaciones: "Para cumplir con el ENS los productos deben estar certificados, es decir, hay que cumplir con la medida op.pl.5."
            }
          ]
    },
    {
        medidaENS: "mp.com.1",
        descripcionENS: "Perímetro seguro",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "8.20 Seguridad de redes. 8.21 Seguridad de los servicios de red ",
                documentacion: "Normativa seguridad de las comunicaciones.",
                observaciones: "Es necesario implantar un sistema de protección mediante Firewall y que cumpla con la medida op.pl.5."
            }
          ]
    },
    {
        medidaENS: "mp.com.2",
        descripcionENS: "Protección de la confidencialidad",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "8.20 Seguridad de redes. 8.21 Seguridad de los servicios de red ",
                documentacion: "Normativa seguridad de las comunicaciones.",
                observaciones: "Es necesario que las redes VPN tengan algoritmos y parámetros autorizados por el CCN."
            }
          ]
    },
    {
        medidaENS: "mp.com.3",
        descripcionENS: "Protección de la autenticidad y de la integridad",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "8.20 Seguridad de redes. 8.21 Seguridad de los servicios de red ",
                documentacion: "Normativa seguridad de las comunicaciones.",
                observaciones: "Para cumplir con el ENS es necesario que las comunicaciones con puntos exteriores al dominio de seguridad, aseguren la autenticidad del otro extremo. Se debe cumplir con la medida op.acc.5 y se debe incluir un mecanismo de autenticación."
            }
          ]
    },
    {
        medidaENS: "mp.com.4",
        descripcionENS: "Separación de flujos de información en la red",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "8.22 Segregación en redes",
                documentacion: "Normativa seguridad de las comunicaciones.",
                observaciones: "Con la documentación existente y las medidas implantadas en ISO 27001 es suficiente."
            }
          ]
    },
    {
        medidaENS: "mp.si.1",
        descripcionENS: "Marcados de soportes",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "5.13  Etiquetado de la información ",
                documentacion: "Normativa de gestión de activos.",
                observaciones: "Con la documentación existente y las medidas implantadas en ISO 27001 es suficiente"
            }
          ]
    },
    {
        medidaENS: "mp.si.2",
        descripcionENS: "Criptografía",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "8.24  Uso de la criptografía",
                documentacion: "Normativa de cifrado.",
                observaciones: "Es necesario implantar medidas para cifrar las copias se seguridad utilizando algoritmos autorizados por el CCN. Las guías CCN STIC 807 y CCN STIC 221 incluyen los requisitos a cumplir. <br><br> Todos los dispositivos que salgan de las instalaciones de la organización deberán ir cifrados. Para ello, es necesario implantar un procedimiento de actuación."
            }
          ]
    },
    {
        medidaENS: "mp.si.3",
        descripcionENS: "Custodia",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "7.10 Soportes de almacenamiento ",
                documentacion: "Normativa de gestión de activos.",
                observaciones: "Con la documentación existente y las medidas implantadas en ISO 27001 es suficiente."
            }
          ]
    },
    {
        medidaENS: "mp.si.4",
        descripcionENS: "Transporte",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "7.10 Soportes de almacenamiento ",
                documentacion: "Normativa de seguridad operativa.",
                observaciones: "Con la documentación existente y las medidas implantadas en ISO 27001 es suficiente."
            }
          ]
    },
    {
        medidaENS: "mp.si.5",
        descripcionENS: "Borrado y destrucción",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "7.14 Eliminación o reutilización segura de los equipos. 8.10 Eliminación de información ",
                documentacion: "Normativa de gestión de activos.",
                observaciones: "Con la documentación existente y las medidas implantadas en ISO 27001 es suficiente."
            }
          ]
    },
    {
        medidaENS: "mp.sw.1",
        descripcionENS: "Desarrollo de aplicaciones",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "8.25 Seguridad en el ciclo de vida del desarrollo",
                documentacion: "Metodologías de desarrollo seguro.",
                observaciones: "No hay que implantar nada más allá de lo previsto para la norma ISO27001."

            }
          ]
    },
    {
        medidaENS: "mp.sw.2",
        descripcionENS: "Aceptación y puesta en servicio",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "8.29 Pruebas de seguridad en desarrollo y aceptación ",
                documentacion: "Metodologías de desarrollo seguro.",
                observaciones: "Es necesario realizar: <br>- Pruebas y verificación de los criterios de aceptación en materia de seguridad.<br>- Informes de pentesting."
            }
          ]
    },
    {
        medidaENS: "mp.info.1",
        descripcionENS: "Datos personales",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "5.34Privacidad y protección de datos de carácter personal (DCP)",
                documentacion: "- Política de Privacidad. <br>- RAT.<br>- EIPD. <br>- Análisis de riesgos.<br>- Procedimientos de ejercicios de derechos, brechas de seguridad, etc.",
                observaciones: "Con lo implantado con la norma ISO 27001 es suficiente, ya que exige el cumplimiento de la ley. Como recordatorio, es necesario disponer del documento de designación formal del DPD y de su notificación a la AEPD."
            }
          ]
    },
    {
        medidaENS: "mp.info.2",
        descripcionENS: "Calificación de la información",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "5.12  Clasificación de la información",
                documentacion: "Norma o procedimiento de calificación de la información.",
                observaciones: "Incluir en el procedimiento la relación de medidas de seguridad en función del nivel de calificación de la información y del tratamiento."
            }
          ]
    },
    {
        medidaENS: "mp.info.3",
        descripcionENS: "Firma electrónica",
	compatibilidad: "Nula",
        controlesISO: [
            {
                controlISO: "8.24 Uso de la criptografía",
                documentacion: "Política de firma electrónica.",
                observaciones: "Documentar la relación de tipos de firma electrónica empleados. <br>- Evidenciar el almacenamiento seguro de los certificados empleados. <br> Evidenciar la gestión de los certificados digitales, indicando si son cualificados o no, CA emisora, caducidad, etc"
            }
          ]
    },
    {
        medidaENS: "mp.info.4",
        descripcionENS: "Sellos de tiempo",
	compatibilidad: "Nula",
        controlesISO: [
            {
                controlISO: "8.24 Uso de la criptografía. 8.26 Requisitos de seguridad de las aplicaciones",
                documentacion: "Normativa de cifrado.",
                observaciones: "No aplica para ENS nivel MEDIO."
            }
          ]
    },
    {
        medidaENS: "mp.info.5",
        descripcionENS: "Limpieza de documentos",
	compatibilidad: "Nula",
        controlesISO: [
            {
                controlISO: "5.13 Etiquetado de la información",
                documentacion: "Normativa de revisión y limpieza de metadatos no deseados.",
                observaciones: "Es necesario realizar una correcta limpieza de metadatos. Sería interesante disponer de una herramienta que permita automatizar la tarea (el CCN dispone de una herramienta). En caso contrario, en la normativa, explicar el proceso manual."
            }
          ]
    },
    {
        medidaENS: "mp.info.6",
        descripcionENS: "Copias de seguridad",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "8.13 Copias de seguridad de la información",
                documentacion: "Política de backup.",
                observaciones: "Con lo dispuesto en ISO 27001 es suficiente. Como recordatorio: <br<- Comparativa entre el RPO del BIA con la normativa de copias de seguridad. <br>- Evidenciar el almacenamiento de copias dentro y/o fuera de las instalaciones. <br>- Realizar pruebas de restauración."
            }
          ]
    },
    {
        medidaENS: "mp.s.1",
        descripcionENS: "Protección del correo electrónico",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "5.14 Transferencia de la información",
                documentacion: "Normativa de uso seguro del correo electrónico.",
                observaciones: "Con lo dispuesto en ISO 27001 es suficiente, ya que el control de la ISO es más amplio y no solo contempla la protección del correo sino de cualquier transferencia de información. No olvidar: <br>- Contemplar posibilidad de cifrado de mensajes de correo electrónico.<br>- Configuración y logs del filtro ‘antispam’. <br>- Análisis y protección antivirus del correo electrónico y de otras amenazas. <br>- Campañas de concienciación y de formación sobre el uso seguro del correo electrónico. <br>- Bastionado empleado para proteger el servidor de correo."
            }
          ]
    },
    {
        medidaENS: "mp.s.2",
        descripcionENS: "Protección de servicios y aplicaciones web",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "8.26 Requisitos de seguridad de las aplicaciones",
                documentacion: "- Normativa de seguridad operativa. <br>- Procedimientos de desarrollo seguro de aplicaciones web. <br>- Procedimiento de auditorías técnicas",
                observaciones: "La principal diferencia con la norma ISO 27001 es la necesidad de realizar auditorías técnicas de caja negra y/o caja blanca."
            }
          ]
    },
    {
        medidaENS: "mp.s.3",
        descripcionENS: "Protección de la navegación web",
	compatibilidad: "Alta",
        controlesISO: [
            {
                controlISO: "8.2 Filtrado de Webs",
                documentacion: "- Normativa de uso seguro de navegación web. <br>- Política de cookies.",
                observaciones: "Para cumplir con el ENS es necesario disponer de las siguientes evidencias: <br>- Campañas sobre navegación web segura.<br>- Acciones formativas dirigidas al personal encargado de la monitorización.<br>- Protecciones implementadas frente a amenazas de la navegación web."
            }
          ]
    },
    {
        medidaENS: "mp.s.4",
        descripcionENS: "Protección frente a la denegación de servicio",
	compatibilidad: "Parcial",
        controlesISO: [
            {
                controlISO: "8.6 Gestión de capacidades",
                documentacion: "Normativa de seguridad operativa.",
                observaciones: "Para cumplir con el ENS es necesario disponer de las siguientes evidencias: <br>- Elementos de protección tecnológica contra ataques de denegación de servicio. <br>- Gestión de la capacidad, especialmente de comunicaciones. <br>- Filtros de configuración DDOS en los firewalls."
            }
          ]
    }
  
  ];

$(document).ready(function() {
    const medidaENSSelect = $('#medidaENS');
    const tableBody = $('#comparison-table').find('tbody');

    // Rellenar el menú desplegable
    data.forEach((item, index) => {
        const option = $('<option></option>').attr('value', index).text(`${item.medidaENS} - ${item.descripcionENS}`);
        medidaENSSelect.append(option);
    });

    // Evento para actualizar la tabla cuando se selecciona una medida del ENS
    medidaENSSelect.on('change', function() {
        // Limpiar la tabla
        tableBody.empty();

        // Obtener la medida seleccionada
        const selectedIndex = $(this).val();
        if (selectedIndex !== "") {
            const selectedData = data[selectedIndex];

            // Rellenar la tabla 
            selectedData.controlesISO.forEach(control => {
                const row = $('<tr></tr>');
                row.html(`
                    <td>${selectedData.medidaENS} - ${selectedData.descripcionENS}</td>
                    <td>${control.controlISO}</td>
                    <td>${selectedData.compatibilidad}</td>
                    <td>${control.documentacion}</td>
                    <td>${control.observaciones}</td>
                `);
                tableBody.append(row);
            });
        }
    });
});