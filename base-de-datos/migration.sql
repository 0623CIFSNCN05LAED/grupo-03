DROP DATABASE
IF
  EXISTS digitalphone_db;
  CREATE DATABASE digitalphone_db;
  USE digitalphone_db;

  -- users table
  DROP TABLE
  IF
    EXISTS `users`;

    CREATE TABLE `users` (
      `id_user` char(36) NOT NULL
      , `name` varchar(35) NOT NULL
      , `last_name` varchar(35) NOT NULL
      , `username` varchar(20) NOT NULL
      , `email` varchar(50) NOT NULL
      , `password` varchar(100) NOT NULL
      , `profile_picture` varchar(100) NOT NULL
      , `admin` tinyint(1) DEFAULT '0' NOT NULL
      , CONSTRAINT `users_pk` PRIMARY KEY (`id_user`)
      , CONSTRAINT `users_email_unique` UNIQUE KEY (`email`)
      , CONSTRAINT `users_username_unique` UNIQUE KEY (`username`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;


    -- brands table
    DROP TABLE
    IF
      EXISTS `brands`;

      CREATE TABLE `brands` (
        `id_brand` int(10) unsigned NOT NULL AUTO_INCREMENT
        , `brand` varchar(50) NOT NULL
        , CONSTRAINT `brands_pk` PRIMARY KEY (`id_brand`)
        , CONSTRAINT `brands_brand_unique` UNIQUE KEY (`brand`)
      ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;


      -- products table
      DROP TABLE
      IF
        EXISTS `products`;

        CREATE TABLE `products` (
          `id_product` char(36) NOT NULL
          , `name` varchar(80) NOT NULL
          , `description` TEXT NOT NULL
          , `featured_desc` varchar(300) DEFAULT null NULL
          , `featured` tinyint(1) DEFAULT '0' NOT NULL
          , `price` DECIMAL unsigned NOT NULL
          , `priceWithDiscount` DECIMAL unsigned DEFAULT null NULL
          , `discount` DECIMAL unsigned DEFAULT null NULL
          , `rating` DECIMAL unsigned NOT NULL
          , `os` varchar(50) NOT NULL
          , `screen` varchar(80) NOT NULL
          , `camera` varchar(50) NOT NULL
          , `id_brand` int(10) unsigned NOT NULL
          , CONSTRAINT `products_pk` PRIMARY KEY (`id_product`)
          , CONSTRAINT `products_id_brands_fk` FOREIGN KEY (`id_brand`) REFERENCES `brands`(`id_brand`)
        ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;


        -- images table
        DROP TABLE
        IF
          EXISTS `images`;

          CREATE TABLE `images` (
            `id_image` int(10) unsigned NOT NULL AUTO_INCREMENT
            , `url_image` varchar(100) NOT NULL
            , `id_product` char(36) NOT NULL
            , CONSTRAINT `images_pk` PRIMARY KEY (`id_image`)
            , CONSTRAINT `images_id_product_fk` FOREIGN KEY (`id_product`) REFERENCES `products`(`id_product`)
          ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;


          -- colors table
          DROP TABLE
          IF
            EXISTS `colors`;

            CREATE TABLE `colors` (
              `id_color` int(10) unsigned NOT NULL AUTO_INCREMENT
              , `color` varchar(30) NOT NULL
              , CONSTRAINT `colors_pk` PRIMARY KEY (`id_color`)
              , CONSTRAINT `colors_color_unique` UNIQUE KEY (`color`)
            ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;


            -- product_color table
            DROP TABLE
            IF
              EXISTS `product_color`;

              CREATE TABLE `product_color` (
                `id_product_color` int(10) unsigned NOT NULL AUTO_INCREMENT
                , `id_product` char(36) NOT NULL
                , `id_color` int(10) unsigned NOT NULL
                , CONSTRAINT `product_color_pk` PRIMARY KEY (`id_product_color`)
                , CONSTRAINT `products_color_id_product_fk` FOREIGN KEY (`id_product`) REFERENCES `products`(`id_product`)
                , CONSTRAINT `products_color_id_color_fk` FOREIGN KEY (`id_color`) REFERENCES `colors`(`id_color`)
              ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;


              -- capacities table
              DROP TABLE
              IF
                EXISTS `capacities`;

                CREATE TABLE `capacities` (
                  `id_capacity` int(10) unsigned NOT NULL AUTO_INCREMENT
                  , `capacity` varchar(10) NOT NULL
                  , CONSTRAINT `capacities_pk` PRIMARY KEY (`id_capacity`)
                  , CONSTRAINT `capacities_capacity_unique` UNIQUE KEY (`capacity`)
                ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;


                -- product_capacity table
                DROP TABLE
                IF
                  EXISTS `product_capacity`;

                  CREATE TABLE `product_capacity` (
                    `id_product_capacity` int(10) unsigned NOT NULL AUTO_INCREMENT
                    , `id_product` char(36) NOT NULL
                    , `id_capacity` int(10) unsigned NOT NULL
                    , CONSTRAINT `product_capacity_pk` PRIMARY KEY (`id_product_capacity`)
                    , CONSTRAINT `products_capacity_id_product_fk` FOREIGN KEY (`id_product`) REFERENCES `products`(`id_product`)
                    , CONSTRAINT `products_capacity_id_capacity_fk` FOREIGN KEY (`id_capacity`) REFERENCES `capacities`(`id_capacity`)
                  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;