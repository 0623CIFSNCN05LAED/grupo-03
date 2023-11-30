-- data load
INSERT INTO
  `users`
VALUES
  (
    '7748f102-4b13-4c6f-ae8a-f374cbf84dd3'
    , 'Franco'
    , 'Sica'
    , 'fsica'
    , 'fsica@digitalphone.com'
    , '$2a$10$JiaOyxCvrJdf1nwUUtZxUu6eH5zETKkag5bYNqYYfFwAtMUjZ1v9e'
    , '/images/users/default-image.jpg'
    , 1
  )
  , (
    '23c7f803-f9c9-4544-a12a-a59a054888cb'
    , 'Antonella'
    , 'Pagano'
    , 'apagano'
    , 'apagano@digitalphone.com'
    , '$2a$10$iRgfOIKvcXZUoroeRtUiH.sv.xo7ZillczaRDw6l.xc4VeZW0CKY2'
    , '/images/users/default-image.jpg'
    , 1
  )
  , (
    'd04d3ad0-eb1c-487a-821c-ef97f903bd26'
    , 'Uusuario'
    , 'Prueba'
    , 'uprueba'
    , 'uprueba@gmail.com'
    , '$2a$10$R/x3kPeP4J4rrwwvZ7NDAuu19mSgNtUoEyvBiKncSeDMMi1VDJbiG'
    , '/images/users/default-image.jpg'
    , 0
  );
						
						
INSERT INTO
  `colors`
VALUES
  (1, 'Gray')
  , (2, 'Phatom Black')
  , (3, 'Cream')
  , (4, 'Icy Blue')
  , (5, 'Graphite')
  , (6, 'Mint')
  , (7, 'Lavander')
  , (8, 'Green')
  , (9, 'Black')
  , (10, 'Oro')
  , (11, 'Negro espacial')
  , (12, 'Plata')
  , (13, 'Morado oscuro')
  , (14, 'Azul')
  , (15, 'Blanco estelar')
  , (16, 'Rosa')
  , (17, 'Azul medianoche')
  , (18, 'Rojo')
  , (19, 'Verde')
  , (20, 'Azul glaciar')
  , (21, 'Viva magenta')
  , (22, 'Negro');


INSERT INTO
  `capacities`
VALUES
  (1, '32gb')
  , (2, '64gb')
  , (3, '128gb')
  , (4, '256gb')
  , (5, '512gb')
  , (6, '1tb');


INSERT INTO
  `brands`
VALUES
  (1, 'Samsung')
  , (2, 'Apple')
  , (3, 'Motorola')
  , (4, 'Oppo')
  , (5, 'Huawei')
  , (6, 'Xiaomi')
  , (7, 'Google');


INSERT INTO
  `products`
VALUES
  (
    'b781d57f-a1a2-470a-b242-28b73fd62664'
    , 'Samsung Galaxy Z Fold 5'
    , 'Las leyes de la física no tienen nada en este diseño nivelado. El Galaxy Z Fold5 hace honor a su nombre al plegarse para cerrar, lo que hace que una pantalla enorme quepa en tu bolsillo desafiando a toda lógica. Abrilo, plegalo para cerrarlo o dejalo abierto en el ángulo perfecto. La bisagra flexible rediseñada es una maravilla técnica que se dobla a tu gusto. Desplegá una pantalla impresionante e inmersiva, rediseñada para ofrecerte juegos como nunca antes, visualización cinematográfica dondequiera que estés y productividad estilo PC, todo en un dispositivo del tamaño de una tableta. Un smartphone tan impresionante que querrás tenerlo todo el tiempo. Y con un enorme sistema de batería doble de 4400 mAh (típico), podés hacerlo. Junto con un procesador avanzado, ajusta de forma eficiente el uso de la energía a tus hábitos y necesidades, haciendo que una carga dure más que nunca. Impulsá tu camino hacia la victoria con el hardware y el software actualizados de la plataforma móvil Snapdragon® 8 Gen 2 Mobile Platform for Galaxy. Este procesador de alto rendimiento alimenta el juego a nivel profesional.'
    , 'El Galaxy Z Fold5 hace honor a su nombre al plegarse para cerrar, lo que hace que una pantalla enorme quepa en tu bolsillo desafiando a toda lógica.'
    , 1
    , 1129999
    , 1016999.1
    , 10
    , 5
    , 'Android'
    , '192.1mm (7.6")'
    , '50.0 MP + 12.0 MP + 10.0 MP'
    , 1
  )
  , (
    '192c4dc4-0c8d-44e3-9263-fcba55047cf3'
    , 'Samsung Galaxy Z Flip 5'
    , 'Respaldada por un procesador poderoso, esta batería de 3700 mAh (uso típico) es aún más eficiente y permite prolongar la carga para que puedas mirar películas sin parar o jugar hasta tarde en la noche. ¿Necesitás más? Habilitá el modo de bajo consumo para que la diversión siga fluyendo. El nuevo Snapdragon® 8 Gen 2 Mobile Platform for Galaxy te lleva a un nivel completamente nuevo en potencia.Experimentá gráficos más suaves, IA más rápida y funcionamiento de la batería mejorado. Este plegable lleva un traje duro con marco de armazón: Armor Aluminium. Presentando un diseño con doble riel nuevo, durable para nuestras bisagras plegables. Con Galaxy Z Flip5, un poco de humedad no frenará tu día.'
    , 'El Galaxy Z Flip5 presenta por primera vez la Flex Window de 3,4 pulgadas creado para la autoexpresión. Compacto y atrapante desde todos los ángulos, este plegable es tan versátil como portátil.'
    , 1
    , 659999
    , 593999.1
    , 10
    , 3
    , 'Android'
    , '170.3mm (6.7")'
    , '12.0 MP + 12.0 MP'
    , 1
  )
  , (
    '0b8e2624-d7d5-4214-948c-8502bf9421c0'
    , 'Samsung Galaxy S23 Ultra'
    , 'Maximizá tu tiempo libre con la plataforma Snapdragon® 8 Gen 2 Mobile para Galaxy, el chip más potente de Snapdragon. Las características mejoradas en todos los ámbitos hacen que todo, desde los juegos hasta la transmisión, esté optimizado y sea perfecto, sin agotar la batería. Dynamic AMOLED 2X ofrece detalles claros y coloridos en la pantalla, ya sea con brillo atenuado bajo o por completo. Y la tecnología de 120 Hz optimiza de manera inteligente la frecuencia de actualización para suavizar la acción y ahorrar en batería. S Pen mantiene vivo el legado de Note. Además, te ayuda a deshacerte de la dependencia de los cuadernos, haciendo que los bocetos y memorandos sean fáciles y ecológicos.'
    , 'Sacá fotos y videos nítidos, desde el anochecer hasta el amanecer. El sensor de cámara más avanzado y el procesador más rápido del Galaxy admiten poca luz y reducen el ruido. E incluso el lente de la cámara borra la captura al atenuar el resplandor.'
    , 1
    , 779999
    , 0
    , 0
    , 5
    , 'Android'
    , '172.21mm (6.78")'
    , '200 MP + 12 MP + 10 MP + 10 MP'
    , 1
  )
  , (
    'da8aedd8-7a96-454b-bde6-3d740e6ffe6e'
    , 'iPhone 14 Pro Max'
    , 'Dynamic Island, una forma nueva y mágica de interactuar con tu iPhone. Modo Cine ahora en 4K Dolby Vision de hasta 30 cps. Detección de Choques,una funcionalidad de seguridad que pide ayuda cuando tú no puedes. Batería para todo el día y hasta 29 horas de reproducción de video. A16 Bionic,el chip de smartphone en su máxima expresión. Red 5G ultrarrápida.'
    , 'El iPhone 14 Pro Max te permite captar detalles increíbles gracias a su cámara gran angular de 48 MP.'
    , 1
    , 1184999
    , 0
    , 0
    , 5
    , 'iOS'
    , '170.8mm (6.7")'
    , '48 MP + 12 MP + 12 MP'
    , 2
  )
  , (
    '1a7b1df5-3b76-4c33-bd5a-fba41b743034'
    , 'iPhone 13'
    , 'El superrápido chip A15 Bionic. Un gran salto en duración de batería. Un diseño resistente. Y una pantalla Super Retina XDR más brillante. Una pantalla OLED más brillante que ahorra energía y se ve increíble incluso a pleno sol. Y un diseño duradero resistente al agua y al polvo. Mejoramos las cámaras como nunca para que tus fotos y videos se vean aún más increíbles. La cámara gran angular capta más luz y la cámara ultra gran angular captura más detalle en las zonas oscuras. Además, incluimos una nueva estabilización óptica de imagen por desplazamiento de sensor. Con el chip A15 Bionic, tienes potencia de sobra para disfrutar los juegos más exigentes y las nuevas funcionalidades, como el modo Cine y los Estilos Fotográficos. El iPhone 13 da un gran salto en duración de batería.'
    , 'El sistema de dos cámaras más avanzado en un iPhone.'
    , 1
    , 692999
    , 0
    , 0
    , 3
    , 'iOS'
    , '154.4mm (6.1")'
    , '12 MP + 12 MP'
    , 2
  )
  , (
    '4fab756b-351a-4010-8287-c7febf730264'
    , 'Motorola Razr 40 Ultra'
    , 'La Vista flexible, el sistema de cámaras de alta calidad, el seguimiento de rostros con IA y la vista previa en la pantalla externa hacen que crear contenido para las redes sociales sea más fácil que nunca. Abrí tu teléfono y usá la cámara de 32 MP para tomar selfies y hacer videollamadas. La tecnología Quad Pixel ofrece una sensibilidad 4 veces mayor en ambientes con poca luz para tomar imágenes nítidas y reales. Disfrutá de toda la potencia del procesador Snapdragon® 8+ Gen 1. Posibilita las increíbles funciones de próxima generación y las optimizaciones del desempeño, como la IA avanzada y la velocidad de actualización superrápida. Aprovechá al máximo las conexiones 5G* más rápidas, las increíbles experiencias de juego y las cámaras de calidad profesional que tanto te gustan. Usalo durante el día y la noche con una sola carga gracias a la batería de 3800 mAh. Potenciá tu experiencia de juego con la frecuencia de actualización de 165 Hz. Reduce los cortes y el efecto fantasma en los juegos compatibles para brindar una experiencia optimizada.'
    , 'Ahora, la pantalla externa interactiva es mejor que nunca. Disfrutá de una pantalla pOLED de 3.6" más envolvente, personal, útil y divertida. Conocé nuevas maneras de sacar fotos y grabar videos con la Flex view, que hace que el teléfono se sostenga por sí solo en varios ángulos.'
    , 1
    , 699999
    , 0
    , 0
    , 3.5
    , 'Android'
    , '175.6mm (6.9")'
    , '12 MP + 13 MP'
    , 3
  );
							
							
INSERT INTO
  `product_color`
VALUES
  (1, 'b781d57f-a1a2-470a-b242-28b73fd62664', 1)
  , (2, 'b781d57f-a1a2-470a-b242-28b73fd62664', 2)
  , (3, 'b781d57f-a1a2-470a-b242-28b73fd62664', 3)
  , (4, 'b781d57f-a1a2-470a-b242-28b73fd62664', 4)
  , (5, '192c4dc4-0c8d-44e3-9263-fcba55047cf3', 5)
  , (6, '192c4dc4-0c8d-44e3-9263-fcba55047cf3', 3)
  , (7, '192c4dc4-0c8d-44e3-9263-fcba55047cf3', 6)
  , (8, '192c4dc4-0c8d-44e3-9263-fcba55047cf3', 7)
  , (9, '0b8e2624-d7d5-4214-948c-8502bf9421c0', 3)
  , (10, '0b8e2624-d7d5-4214-948c-8502bf9421c0', 8)
  , (11, '0b8e2624-d7d5-4214-948c-8502bf9421c0', 9)
  , (12, '0b8e2624-d7d5-4214-948c-8502bf9421c0', 7)
  , (13, 'da8aedd8-7a96-454b-bde6-3d740e6ffe6e', 10)
  , (14, 'da8aedd8-7a96-454b-bde6-3d740e6ffe6e', 11)
  , (15, 'da8aedd8-7a96-454b-bde6-3d740e6ffe6e', 12)
  , (16, 'da8aedd8-7a96-454b-bde6-3d740e6ffe6e', 13)
  , (17, '1a7b1df5-3b76-4c33-bd5a-fba41b743034', 14)
  , (18, '1a7b1df5-3b76-4c33-bd5a-fba41b743034', 15)
  , (19, '1a7b1df5-3b76-4c33-bd5a-fba41b743034', 16)
  , (20, '1a7b1df5-3b76-4c33-bd5a-fba41b743034', 19)
  , (21, '1a7b1df5-3b76-4c33-bd5a-fba41b743034', 17)
  , (22, '1a7b1df5-3b76-4c33-bd5a-fba41b743034', 18)
  , (23, '4fab756b-351a-4010-8287-c7febf730264', 22)
  , (24, '4fab756b-351a-4010-8287-c7febf730264', 20)
  , (25, '4fab756b-351a-4010-8287-c7febf730264', 21);
								
							
INSERT INTO
  `product_capacity`
VALUES
  (1, 'b781d57f-a1a2-470a-b242-28b73fd62664', 4)
  , (2, 'b781d57f-a1a2-470a-b242-28b73fd62664', 5)
  , (3, 'b781d57f-a1a2-470a-b242-28b73fd62664', 6)
  , (4, '192c4dc4-0c8d-44e3-9263-fcba55047cf3', 4)
  , (5, '192c4dc4-0c8d-44e3-9263-fcba55047cf3', 5)
  , (6, '192c4dc4-0c8d-44e3-9263-fcba55047cf3', 6)
  , (7, '0b8e2624-d7d5-4214-948c-8502bf9421c0', 4)
  , (8, '0b8e2624-d7d5-4214-948c-8502bf9421c0', 5)
  , (9, '0b8e2624-d7d5-4214-948c-8502bf9421c0', 6)
  , (10, 'da8aedd8-7a96-454b-bde6-3d740e6ffe6e', 3)
  , (11, 'da8aedd8-7a96-454b-bde6-3d740e6ffe6e', 4)
  , (12, 'da8aedd8-7a96-454b-bde6-3d740e6ffe6e', 5)
  , (13, 'da8aedd8-7a96-454b-bde6-3d740e6ffe6e', 6)
  , (14, '1a7b1df5-3b76-4c33-bd5a-fba41b743034', 3)
  , (15, '1a7b1df5-3b76-4c33-bd5a-fba41b743034', 4)
  , (16, '1a7b1df5-3b76-4c33-bd5a-fba41b743034', 5)
  , (17, '4fab756b-351a-4010-8287-c7febf730264', 5);
								
							
INSERT INTO
  `images`
VALUES
  (
    1
    , '/images/products/zfold5-n1.jpg'
    , 'b781d57f-a1a2-470a-b242-28b73fd62664'
  )
  , (
    2
    , '/images/products/zfold5-n2.jpg'
    , 'b781d57f-a1a2-470a-b242-28b73fd62664'
  )
  , (
    3
    , '/images/products/zfold5-n3.jpg'
    , 'b781d57f-a1a2-470a-b242-28b73fd62664'
  )
  , (
    4
    , '/images/products/zfold5-n4.jpg'
    , 'b781d57f-a1a2-470a-b242-28b73fd62664'
  )
  , (
    5
    , '/images/products/zflip5-n1.jpg'
    , '192c4dc4-0c8d-44e3-9263-fcba55047cf3'
  )
  , (
    6
    , '/images/products/zflip5-n2.jpg'
    , '192c4dc4-0c8d-44e3-9263-fcba55047cf3'
  )
  , (
    7
    , '/images/products/zflip5-n3.jpg'
    , '192c4dc4-0c8d-44e3-9263-fcba55047cf3'
  )
  , (
    8
    , '/images/products/zflip5-n4.jpg'
    , '192c4dc4-0c8d-44e3-9263-fcba55047cf3'
  )
  , (
    9
    , '/images/products/s23ultra-n1.jpg'
    , '0b8e2624-d7d5-4214-948c-8502bf9421c0'
  )
  , (
    10
    , '/images/products/s23ultra-n2.jpg'
    , '0b8e2624-d7d5-4214-948c-8502bf9421c0'
  )
  , (
    11
    , '/images/products/s23ultra-n3.jpg'
    , '0b8e2624-d7d5-4214-948c-8502bf9421c0'
  )
  , (
    12
    , '/images/products/s23ultra-n4.jpg'
    , '0b8e2624-d7d5-4214-948c-8502bf9421c0'
  )
  , (
    13
    , '/images/products/i14promax-n1.jpg'
    , 'da8aedd8-7a96-454b-bde6-3d740e6ffe6e'
  )
  , (
    14
    , '/images/products/i14promax-n2.jpg'
    , 'da8aedd8-7a96-454b-bde6-3d740e6ffe6e'
  )
  , (
    15
    , '/images/products/i14promax-n3.jpg'
    , 'da8aedd8-7a96-454b-bde6-3d740e6ffe6e'
  )
  , (
    16
    , '/images/products/i14promax-n4.jpg'
    , 'da8aedd8-7a96-454b-bde6-3d740e6ffe6e'
  )
  , (
    17
    , '/images/products/i13-n1.jpg'
    , '1a7b1df5-3b76-4c33-bd5a-fba41b743034'
  )
  , (
    18
    , '/images/products/i13-n2.jpg'
    , '1a7b1df5-3b76-4c33-bd5a-fba41b743034'
  )
  , (
    19
    , '/images/products/i13-n3.jpg'
    , '1a7b1df5-3b76-4c33-bd5a-fba41b743034'
  )
  , (
    20
    , '/images/products/i13-n4.jpg'
    , '1a7b1df5-3b76-4c33-bd5a-fba41b743034'
  )
  , (
    21
    , '/images/products/razr40ultra-n1.jpg'
    , '4fab756b-351a-4010-8287-c7febf730264'
  )
  , (
    22
    , '/images/products/razr40ultra-n2.jpg'
    , '4fab756b-351a-4010-8287-c7febf730264'
  )
  , (
    23
    , '/images/products/razr40ultra-n3.jpg'
    , '4fab756b-351a-4010-8287-c7febf730264'
  )
  , (
    24
    , '/images/products/razr40ultra-n4.jpg'
    , '4fab756b-351a-4010-8287-c7febf730264'
  );