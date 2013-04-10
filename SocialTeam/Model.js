
guidedModel =// @startlock
{
	Entidades :
	{
		NombreCompleto :
		{
			onGet:function()
			{// @endlock
				return this.Nombre+" "+this.Apellido1+" "+this.Apellido2;
			}// @startlock
		},
		methods :
		{// @endlock
			insertarEntidad:function(vNombre, vApellido1, vApellido2)
			{// @lock
				new_entidad = new ds.Entidades({
					Nombre: vNombre,
					Apellido1: vApellido1,
					Apellido2: vApellido2
					
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
