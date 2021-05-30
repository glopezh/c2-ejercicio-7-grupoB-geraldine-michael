const equiposMayoresEdad = (equipos, edad) => {
    const equiposAsignadosMayoresEdad = equipos.filter(
        ({
            asignado: {
                empleado: { edad: edadEmpleado },
            },
        }) => edadEmpleado > edad
    );
    return equiposAsignadosMayoresEdad;
};
const equiposProvincia = (equipos, provincia) => {
    const equiposProvinciaQueBuscamos = equipos.filter(
        ({ asignado: { provincia: provinciaAsignado } }) =>
        provinciaAsignado.toLowerCase() === provincia.toLowerCase()
    );
    return equiposProvinciaQueBuscamos;
};
const equiposPorEdad = (equipos) =>
    equipos.sort(
        ({
            asignado: {
                empleado: { edad: edadTrabajadorA },
            },
        }, {
            asignado: {
                empleado: { edad: edadTrabajadorB },
            },
        }) => edadTrabajadorA - edadTrabajadorB
    );
const equiposTipo = (equipos, tipo) =>
    equipos.filter(
        ({ tipo: tipoEquipo }) => tipoEquipo.toLowerCase() === tipo.toLowerCase()
    );
const trabajadoresTipo = (equipos, tipo) =>
    equipos
    .filter(
        ({ tipo: tipoEquipo }) => tipoEquipo.toLowerCase() === tipo.toLowerCase()
    )
    .map(({ asignado: { empleado } }) => empleado);
const equiposTipoLocalidad = (equipos, tipo, localidad) =>
    equipos.filter(
        ({ tipo: equipoTipo, asignado: { provincia: trabajadoresProvincia } }) =>
        equipoTipo.toLowerCase() === tipo.toLowerCase() &&
        trabajadoresProvincia.toLowerCase() === localidad.toLowerCase()
    );
