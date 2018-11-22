import React, { Component } from 'react';

const ConsultaRow = (props) => <tr>
  <th>{props.consulta.fecha.slice(0,10)}</th>
  <th>({props.consulta.idUsuario.cuenta}) {' ' + props.consulta.idUsuario.nombre}</th>
  <th>({props.consulta.idRecurso.id}) {' ' + props.consulta.idRecurso.nombre}</th>
</tr>

export default ConsultaRow;