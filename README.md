Script para crear la tabla contenidos en base de datos en PostgreSQL

CREATE TABLE contenidos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    imagen TEXT,
    url TEXT UNIQUE
);

Script para insertar las tuplas en la tabla

INSERT INTO contenidos (titulo, descripcion, imagen, url) VALUES
('Reunión de superados',
 'Un grupo de padres y apoderados de un exclusivo colegio, donde las apariencias y el estatus jugarán un papel central',
 'https://elfiltrador.com/wp-content/uploads/2025/08/reunion-de-superados-696x392.webp',
 'https://mdstrm.com/video/68d3173c4d40278260d670be.m3u8'),

('El Internado',
 'Reality show de Mega que combina cocina, cultivo y competencias. Los participantes, que incluyen influencers, exdeportistas, cantantes y más, se enfrentan a desafíos culinarios, pruebas físicas y la convivencia en una casa-estudio.',
 'https://elfiltrador.com/wp-content/uploads/2025/09/el-internado-mega-696x435.webp',
 'https://mdstrm.com/video/68c9ccdd0d7c3c0e8c4d8f55.m3u8'),

('De Paseo',
 'De Paseo ofrece una mirada profunda a la vida chilena, mostrando las costumbres, tradiciones y la rica herencia cultural del país.',
 'https://elfiltrador.com/wp-content/uploads/2023/08/de-paseo-mega-696x464.webp',
 'https://mdstrm.com/video/68bde5aa3097d7f897e6931e.m3u8'),

('Only Fama',
 'El programa se centra en reuniones distendidas entre amigos, donde los presentadores y otros invitados comparten conversaciones sobre sus vidas, juegos y secretos sin filtros',
 'https://elfiltrador.com/wp-content/uploads/2024/11/Only-fama-Mega.webp',
 'https://mdstrm.com/video/688160898e68b8ab1e4f1c7a.m3u8'),

('Mucho Gusto',
 'Matinal, producido y transmitido por Mega desde el Mes de Septiembre del año 2001, y es conducido actualmente por Karen Doggenweiler y José Antonio Neme.',
 'https://elfiltrador.com/wp-content/uploads/2023/09/Mucho-Gusto-Mega.webp',
 'https://mdstrm.com/video/68d4230374c1feb9dac9eb44.m3u8');
