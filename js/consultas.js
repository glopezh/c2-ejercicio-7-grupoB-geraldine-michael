const equiposMayoresEdad = (equipos, edad) =>
    equipos.filter(
        ({
            asignado: {
                empleado: { edad: edadEmpleado },
            },
        }) => edadEmpleado > edad
    );
const equiposProvincia = (equipos, provincia) =>
    equipos.filter(
        ({ asignado: { provincia: provinciaAsignado } }) =>
        provinciaAsignado.toLowerCase() === provincia.toLowerCase()
    );
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
const resumenEquipos = (equipos) =>
    equipos.map(({ id, asignado: { poblacion, provincia } }) => ({
        id,
        poblacion,
        provincia,
    }));

const eliminaDuplicados = (arr) => {

  const unicos = [];

  for (let i = 0; i < arr.length; i++) {

    const elemento = arr[i];

    if (!unicos.includes(arr[i])) {
      unicos.push(elemento);
    }
  }

  return unicos;
}


const provincias = (equipos) =>
  equipos.map(({asignado:{provincia}})=>provincia)
  .filter((provincia, index, provincias) => provincias.indexOf(provincia) === index);


