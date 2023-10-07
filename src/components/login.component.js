import React, { Component } from "react";
import "boxicons";

export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Plataforma Gestión Ayudantia UCM</h3>

        <div className="mb-3">
          <i class="bx bx-user"></i>
          <input
            type="email"
            className="form-control"
            placeholder=" Nombre Usuario"
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Acceder
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="https://gestion-clave.ucm.cl/#/">
            ¿Olvido su nombre de usuario o Contraseña?
          </a>
        </p>
      </form>
    );
  }
}
