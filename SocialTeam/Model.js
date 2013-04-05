
guidedModel =// @startlock
{
	Entidades :
	{
		methods :
		{// @endlock
			insertarEntidad:function(vNombre, vApellido1)
			{// @lock
				new_entidad = new ds.Entidades({
					Nombre: vNombre,
					Apellido1: vApellido1
				}).save();				
			}// @startlock
		}
	},
	Usuarios :
	{
		methods :
		{// @endlock
			insertarUsuario:function(vNombre, vPass)
			{// @lock
				new_usuario = new ds.Usuarios({
					NombreAcceso: vNombre,
					Password: vPass
				}).save();
				
				/*
				
				usuario = directory.addUser(vNombre,vPass);
				usuario.putInto("usuarios");
				directory.save();
				
				*/
								
			}// @startlock
		}
	}
};// @endlock
