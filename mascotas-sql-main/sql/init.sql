CREATE TABLE IF NOT EXISTS mascotas (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    edad INT,
    raza VARCHAR(50),
    color VARCHAR(50),
    fecha_desaparicion  DATETIME,
    fecha_encontrado DATETIME NULL
);

CREATE TABLE IF NOT EXISTS ubicacion(
    nombre VARCHAR(50),
    latitud DECIMAL(9,6) NULL,
    longitud DECIMAL(9,6) NULL
);


INSERT INTO mascotas 
(nombre,edad,raza,color,fecha_desaparicion,fecha_encontrado) 
VALUES 
("Ryan",10,"americano de pelo corto","gris",'2024-2-23 00:00:00', NULL);

INSERT INTO mascotas 
(nombre,edad,raza,color,fecha_desaparicion,fecha_encontrado) 
VALUES 
("Milo",1,"ragdoll","negro y blanco",'2024-3-11 00:00:00', NULL);

INSERT INTO mascotas 
(nombre,edad,raza,color,fecha_desaparicion,fecha_encontrado) 
VALUES 
("pepito",0,"golden retriever","marron claro",'2024-4-4 00:00:00', NULL);

INSERT INTO mascotas 
(nombre,edad,raza,color,fecha_desaparicion,fecha_encontrado) 
VALUES 
("Miguel",7,"americano de pelo corto","naranja y blanco",'2024-1-1 00:00:00', NULL);

INSERT INTO mascotas 
(nombre,edad,raza,color,fecha_desaparicion,fecha_encontrado) 
VALUES 
("Horacio",9," border collie","marron y blanco",'2024-5-25 00:00:00', NULL);

INSERT INTO mascotas 
(nombre,edad,raza,color,fecha_desaparicion,fecha_encontrado) 
VALUES 
("pedro",2,"Jack Rusell Terrier","blanco",'2023-11-21 00:00:00', NULL);

INSERT INTO mascotas 
(nombre,edad,raza,color,fecha_desaparicion,fecha_encontrado) 
VALUES 
("Raul",5,"americano de pelo corto","gris",'2024-1-23 00:00:00', NULL);

INSERT INTO mascotas 
(nombre,edad,raza,color,fecha_desaparicion,fecha_encontrado) 
VALUES 
("Huh?",7,"angora turco","blanco",'2024-6-1 00:00:00', NULL);

INSERT INTO mascotas 
(nombre,edad,raza,color,fecha_desaparicion,fecha_encontrado) 
VALUES 
("Pancho",7,"chihuahua","blanco hueso",'2024-3-24 00:00:00', NULL);
