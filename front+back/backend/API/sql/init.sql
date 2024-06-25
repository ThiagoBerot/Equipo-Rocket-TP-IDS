CREATE TABLE IF NOT EXISTS mascotas(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100),
    tipo VARCHAR(100),
    sexo VARCHAR(100),
    edad VARCHAR(100),
    raza VARCHAR(100),
    color VARCHAR(100),
    tamanio VARCHAR(100),
    mail VARCHAR(100),
    descripcion VARCHAR(200),
    fecha_desaparicion  DATETIME,
    fecha_encontrado DATETIME,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS coordenadas(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(200),
    direccion VARCHAR(200),
    latitud VARCHAR(200) NOT NULL,
    longitud VARCHAR(200) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO mascotas (nombre,tipo,sexo,edad,raza,color,tamanio,mail,descripcion,fecha_desaparicion,fecha_encontrado)
VALUES ("Ryan","gato","Macho","Adulto","americano de pelo corto","Gris","Grande","ryan@gmail.com","Desaparecio de repente",'2024-2-23 00:00:00', NULL);
INSERT INTO mascotas (nombre,tipo,sexo,edad,raza,color,tamanio,mail,descripcion,fecha_desaparicion,fecha_encontrado)
VALUES ("Milo","gato","Macho","cachorro","ragdoll","negro y blanco","pequeño","milo@gmail.com","Desaparecio de repente",'2024-3-11 00:00:00', NULL);
INSERT INTO mascotas (nombre,tipo,sexo,edad,raza,color,tamanio,mail,descripcion,fecha_desaparicion,fecha_encontrado)
VALUES ("pepito","perro","Macho","cachorro","golden retriever","marron claro","pequeño","pepito@gmail.com","Desaparecio de repente",'2024-4-4 00:00:00', NULL);
INSERT INTO mascotas (nombre,tipo,sexo,edad,raza,color,tamanio,mail,descripcion,fecha_desaparicion,fecha_encontrado)
VALUES ("Karen","gato","Hembra","adulto","americano de pelo corto","naranja y blanco","mediano","karen@gmail.com","Desaparecio de repente",'2024-1-1 00:00:00', NULL);
INSERT INTO mascotas (nombre,tipo,sexo,edad,raza,color,tamanio,mail,descripcion,fecha_desaparicion,fecha_encontrado)
VALUES ("Horacio","perro","Macho","adulto"," border collie","marron y blanco","grande","horacio@gmail.com","Desaparecio de repente",'2024-5-25 00:00:00', NULL);
INSERT INTO mascotas (nombre,tipo,sexo,edad,raza,color,tamanio,mail,descripcion,fecha_desaparicion,fecha_encontrado)
VALUES ("Mika","perro","Hembra","adulto","Jack Rusell Terrier","blanco","mediano","mika@gmail.com","Desaparecio de repente",'2023-11-21 00:00:00', NULL);
INSERT INTO mascotas (nombre,tipo,sexo,edad,raza,color,tamanio,mail,descripcion,fecha_desaparicion,fecha_encontrado)
VALUES ("Raul","gato","Macho","adulto","americano de pelo corto","gris","mediano","raul@gmail.com","Desaparecio de repente",'2024-1-23 00:00:00', NULL);
INSERT INTO mascotas (nombre,tipo,sexo,edad,raza,color,tamanio,mail,descripcion,fecha_desaparicion,fecha_encontrado)
VALUES ("Huh?","gato","Macho","adulto","angora turco","blanco","Grande","huh@gmail.com","Desaparecio de repente",'2024-6-1 00:00:00', NULL);
INSERT INTO mascotas (nombre,tipo,sexo,edad,raza,color,tamanio,mail,descripcion,fecha_desaparicion,fecha_encontrado)
VALUES ("Pancho","perro","Macho","adulto","chihuahua","blanco hueso","Pequeño","pancho@gmail.com","Desaparecio de repente",'2024-3-24 00:00:00', NULL);

INSERT INTO coordenadas (nombre,direccion,latitud,longitud,especie)
VALUES ("Ryan","Av. Paseo Colón 250, C1054","-34.610631","-58.369250","gato");
INSERT INTO coordenadas (nombre,direccion,latitud,longitud,especie)
VALUES ("Milo","Av. Rivadavia 717, C1002AAF","-34.608131","-58.376856","gato");
INSERT INTO coordenadas (nombre,direccion,latitud,longitud,especie)
VALUES ("pepito","Jeanette Campbell 4581","-34.675994","-58.455311","perro");
INSERT INTO coordenadas (nombre,direccion,latitud,longitud,especie)
VALUES ("Karen","Av. Rivadavia 6151-6193","-34.625359","-58.453405","gato");
INSERT INTO coordenadas (nombre,direccion,latitud,longitud,especie)
VALUES ("Horacio","Nicaragua 4600-4548, C1414BVF","-34.588418","-58.424974","perro");
INSERT INTO coordenadas (nombre,direccion,latitud,longitud,especie)
VALUES ("Mika","Av. Olazábal 2501-2599, C1428DHH","-34.560870","-58.459699","perro");
INSERT INTO coordenadas (nombre,direccion,latitud,longitud,especie)
VALUES ("Raul","Montañeses 2225, C1428 ","-34.556089","-58.450057","gato");
INSERT INTO coordenadas (nombre,direccion,latitud,longitud,especie)
VALUES ("Huh?","Av. Pres. Figueroa Alcorta 5300-5288, C1426CBP","-34.565176", "-58.420497","gato");
INSERT INTO coordenadas (nombre,direccion,latitud,longitud,especie)
VALUES ("Pancho","Gregorio de Laferrère 2601-2699, C1406HFE","-34.637985", "-58.461345","perro");

