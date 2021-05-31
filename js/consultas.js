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

const provincias = (equipos) =>
  equipos.map(({ asignado: { provincia } }) => provincia)
    .filter((provincia, index, provincias) => provincias.indexOf(provincia) === index);

const puestos = (equipos) =>
  equipos
    .map(({ asignado: { empleado: { puesto } } }) => ({
      Puesto: puesto,
    }))
    .filter((puesto, index, puestos) => puestos.indexOf(puesto) === index);

const edadMedia = (equipos) =>
  equipos
    .map(({ asignado: { empleado: { edad } } }) =>
      edad
    ).reduce(
      (acumulador, edad, _index, edades) => edad / edades.length + acumulador,
      0
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

const equiposPorTipo = (equipos) =>
  equipos
    .map
    (({ tipo,id, asignado: { poblacion, provincia } }) => ({
      tipo,
      id,
      poblacion,
      provincia,

    })).filter((puesto, index, puestos) => puestos.indexOf(puesto) === index);

