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
