CREATE TABLE IF NOT EXISTS mascotas (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    edad VARCHAR(50),
    raza VARCHAR(50),
    color VARCHAR(50),
    fecha_desaparicion  DATETIME,
    fecha_encontrado DATETIME NULL
);

CREATE TABLE IF NOT EXISTS ubicacion(
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    direccion VARCHAR(100),
    latitud DECIMAL(9,6) NULL,
    longitud DECIMAL(9,6) NULL
);

--Ryan
INSERT INTO mascotas 
(nombre,edad,raza,color,fecha_desaparicion,fecha_encontrado) 
VALUES 
("Ryan","adulto","americano de pelo corto","gris",'2024-2-23 00:00:00', NULL);
INSERT INTO ubicacion
(nombre,direccion,latitud,longitud)
VALUES
("Ryan","Av. Paseo Colón 250, C1054",-34.610631,-58.369250);
--Milo
INSERT INTO mascotas 
(nombre,edad,raza,color,fecha_desaparicion,fecha_encontrado) 
VALUES 
("Milo","cachorro","ragdoll","negro y blanco",'2024-3-11 00:00:00', NULL);
INSERT INTO ubicacion
(nombre,direccion,latitud,longitud)
VALUES
("Milo","Av. Rivadavia 717, C1002AAF",-34.608131,-58.376856);
--pepito
INSERT INTO mascotas 
(nombre,edad,raza,color,fecha_desaparicion,fecha_encontrado) 
VALUES 
("pepito","cachorro","golden retriever","marron claro",'2024-4-4 00:00:00', NULL);
INSERT INTO ubicacion
(nombre,direccion,latitud,longitud)
VALUES
("pepito","Jeanette Campbell 4581",-34.675994,-58.455311);
--Miguel
INSERT INTO mascotas 
(nombre,edad,raza,color,fecha_desaparicion,fecha_encontrado) 
VALUES 
("Miguel","adulto","americano de pelo corto","naranja y blanco",'2024-1-1 00:00:00', NULL);
INSERT INTO ubicacion
(nombre,direccion,latitud,longitud)
VALUES
("Miguel","Av. Rivadavia 6151-6193",-34.625359,-58.453405);
--Horacio
INSERT INTO mascotas 
(nombre,edad,raza,color,fecha_desaparicion,fecha_encontrado) 
VALUES 
("Horacio","adulto"," border collie","marron y blanco",'2024-5-25 00:00:00', NULL);
INSERT INTO ubicacion
(nombre,direccion,latitud,longitud)
VALUES
("Horacio","Nicaragua 4600-4548, C1414BVF",-34.588418,-58.424974);
--pedro
INSERT INTO mascotas 
(nombre,edad,raza,color,fecha_desaparicion,fecha_encontrado) 
VALUES 
("pedro","adulto","Jack Rusell Terrier","blanco",'2023-11-21 00:00:00', NULL);
INSERT INTO ubicacion
(nombre,direccion,latitud,longitud)
VALUES
("pedro","Av. Olazábal 2501-2599, C1428DHH",-34.560870,-58.459699);
--Raul
INSERT INTO mascotas 
(nombre,edad,raza,color,fecha_desaparicion,fecha_encontrado) 
VALUES 
("Raul","adulto","americano de pelo corto","gris",'2024-1-23 00:00:00', NULL);
INSERT INTO ubicacion
(nombre,direccion,latitud,longitud)
VALUES
("Raul","Montañeses 2225, C1428 ",-34.556089, -58.450057);
--Huh?
INSERT INTO mascotas 
(nombre,edad,raza,color,fecha_desaparicion,fecha_encontrado) 
VALUES 
("Huh?","adulto","angora turco","blanco",'2024-6-1 00:00:00', NULL);
INSERT INTO ubicacion
(nombre,direccion,latitud,longitud)
VALUES
("Huh?","Av. Pres. Figueroa Alcorta 5300-5288, C1426CBP",-34.565176, -58.420497);
--Pancho
INSERT INTO mascotas 
(nombre,edad,raza,color,fecha_desaparicion,fecha_encontrado) 
VALUES 
("Pancho","adulto","chihuahua","blanco hueso",'2024-3-24 00:00:00', NULL);
INSERT INTO ubicacion
(nombre,direccion,latitud,longitud)
VALUES
("Pancho","Gregorio de Laferrère 2601-2699, C1406HFE",-34.637985, -58.461345);