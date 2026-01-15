     const menuDot= document.getElementById('menuDot');
            const menu = document.getElementById('menu');

        menuDot.addEventListener('click', (e) => {
            e.stopPropagation(); // prevent window click from firing
            menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
        });

        
        window.addEventListener('click', () => {
            menu.style.display = 'none';
        });

        
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.style.display = 'none';
                // browser will follow the link normally
            });
        });

            