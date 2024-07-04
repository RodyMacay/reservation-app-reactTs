import React from 'react';
import { Link } from 'react-router-dom';

export const FormUserProfile = () => {
    return (
        <>
            <form className="grid gap-4">
  <div className="grid gap-2">
    <label htmlFor="first-name" className="text-sm font-medium leading-none">
      Nombre
    </label>
    <input
      type="text"
      id="first-name"
      className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50"
      placeholder="Ingrese su nombre"
    />
  </div>
  <div className="grid gap-2">
    <label htmlFor="last-name" className="text-sm font-medium leading-none">
      Apellido
    </label>
    <input
      type="text"
      id="last-name"
      className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50"
      placeholder="Ingrese su apellido"
    />
  </div>
  <div className="grid gap-2">
    <label htmlFor="profile-image" className="text-sm font-medium leading-none">
      Imagen de Perfil
    </label>
    <div className="flex items-center gap-2">
      <input
        type="file"
        id="profile-image"
        accept="image/*"
        className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50"
      />
    </div>
  </div>
  <div className="grid gap-2">
    <label htmlFor="document-number" className="text-sm font-medium leading-none">
      Número de Documento (DNI)
    </label>
    <input
      type="text"
      id="document-number"
      className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50"
      placeholder="Ingrese su DNI"
    />
  </div>
  <div className="grid gap-2">
    <label htmlFor="phone" className="text-sm font-medium leading-none">
      Teléfono
    </label>
    <input
      type="tel"
      id="phone"
      className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50"
      placeholder="Ingrese su teléfono"
    />
  </div>
  <div className="grid gap-2">
    <label htmlFor="gender" className="text-sm font-medium leading-none">
      Género
    </label>
    <select
      id="gender"
      className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50"
    >
      <option value="female">Mujer</option>
      <option value="male">Hombre</option>
      <option value="other">Otro</option>
    </select>
  </div>
  <div className="grid gap-2">
    <label htmlFor="related-field" className="text-sm font-medium leading-none">
      Modelo del Auto
    </label>
    <input
      type="text"
      id="related-field"
      className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50"
      placeholder="Campo relacionado"
    />
  </div>
  <div className="grid gap-2">
    <label htmlFor="related-field" className="text-sm font-medium leading-none">
      Placa del auto
    </label>
    <input
      type="text"
      id="related-field"
      className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder-text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50"
      placeholder="Campo relacionado"
    />
  </div>
  <Link to='/profile'>
    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8">
      Guardar Perfil
    </button>
  </Link>
</form>

</>
    );
};
