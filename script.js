const GITHUB_USER = 'duckyy223';
const GITHUB_REPO = 'obj_pajina';

const models = [
    {
        name: 'Dominus',
        folder: 'Dominus',
        category: 'dominus',
        image: 'https://t3.rbxcdn.com/e71cac27525c7771c836b9c06b31e8c0',
        size: '11 KB'
    },
    {
        name: 'Dominus Claves',
        folder: 'dominusclaves',
        category: 'dominus',
        image: 'https://t0.rbxcdn.com/c09faf7e57c0f35b0a5c3b0c8f5d5e6c',
        size: '223 KB'
    },
    {
        name: 'Dominus Infernus',
        folder: 'dominusinfernus',
        category: 'dominus',
        image: 'https://t7.rbxcdn.com/fb3f9dd6cc1d4c9f23c0f4f4e0b6e3f7',
        size: '12 KB'
    },
    {
        name: 'Dominus Dorado',
        folder: 'dominousdorado',
        category: 'dominus',
        image: 'https://t2.rbxcdn.com/a8b7c6d5e4f3a2b1c9d8e7f6a5b4c3d2',
        size: '25 KB'
    },
    {
        name: 'Corona Domino',
        folder: 'coronadomino',
        category: 'corona',
        image: 'https://t1.rbxcdn.com/b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4',
        size: '5.5 KB'
    },
    {
        name: 'Corona Domino Platino',
        folder: 'coronadominoplatino',
        category: 'corona',
        image: 'https://t4.rbxcdn.com/c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5',
        size: '5.5 KB'
    },
    {
        name: 'Coronatix',
        folder: 'coronatix',
        category: 'corona',
        image: 'https://t5.rbxcdn.com/d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6',
        size: '7.2 KB'
    },
    {
        name: 'Collar Lujoso',
        folder: 'collarlujoso',
        category: 'otros',
        image: 'https://t6.rbxcdn.com/e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7',
        size: '34 KB'
    },
    {
        name: 'Gorra 180',
        folder: 'gorra180',
        category: 'otros',
        image: 'https://t8.rbxcdn.com/f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8',
        size: '12 KB'
    },
    {
        name: 'Pelo Anime Negro',
        folder: 'peloanimenegro',
        category: 'pelo',
        image: 'https://t9.rbxcdn.com/a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9',
        size: '69 KB'
    },
    {
        name: 'Pelo Castaño',
        folder: 'pelocastaño',
        category: 'pelo',
        image: 'https://t0.rbxcdn.com/b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0',
        size: '52 KB'
    },
    {
        name: 'Pelo Castaño Estiloso',
        folder: 'pelocastañoestiloso',
        category: 'pelo',
        image: 'https://t1.rbxcdn.com/c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1',
        size: '24 KB'
    },
    {
        name: 'Pelo Marrón',
        folder: 'pelomarron',
        category: 'pelo',
        image: 'https://t2.rbxcdn.com/d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2',
        size: '32 KB'
    },
    {
        name: 'Pelo Negro Desordenado',
        folder: 'pelonegrodesordenado',
        category: 'pelo',
        image: 'https://t3.rbxcdn.com/e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3',
        size: '82 KB'
    },
    {
        name: 'Pelo Negro',
        folder: 'pelonegrto',
        category: 'pelo',
        image: 'https://t4.rbxcdn.com/f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4',
        size: '4.6 KB'
    },
    {
        name: 'Pelo Revuelto',
        folder: 'pelorevuelto',
        category: 'pelo',
        image: 'https://t5.rbxcdn.com/a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5',
        size: '7.4 KB'
    },
    {
        name: 'Pelo Trecky',
        folder: 'pelotrecky',
        category: 'pelo',
        image: 'https://t6.rbxcdn.com/b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6',
        size: '17 KB'
    },
    {
        name: 'Red Valk',
        folder: 'redvalk',
        category: 'valkiria',
        image: 'https://t7.rbxcdn.com/c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7',
        size: '43 KB'
    },
    {
        name: 'Valkiria Azul',
        folder: 'Valquiriaazul',
        category: 'valkiria',
        image: 'https://t8.rbxcdn.com/d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8',
        size: '43 KB'
    },
    {
        name: 'Valkiria Violeta',
        folder: 'valquiriavioleta',
        category: 'valkiria',
        image: 'https://t9.rbxcdn.com/e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9',
        size: '43 KB'
    }
];

function renderModels(modelsToRender = models) {
    const grid = document.getElementById('modelsGrid');
    grid.innerHTML = '';

    modelsToRender.forEach(model => {
        const card = document.createElement('div');
        card.className = 'model-card';
        card.setAttribute('data-category', model.category);

        card.innerHTML = `
            <div class="model-image">
                <img src="${model.image}" alt="${model.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect width=%22200%22 height=%22200%22 fill=%22%23f5f5f5%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2220%22 fill=%22%230f3460%22>🎮</text></svg>'">
            </div>
            <div class="model-info">
                <h3 class="model-name">${model.name}</h3>
                <p class="model-files">Incluye: OBJ + Texturas</p>
                <span class="model-size">📦 ${model.size}</span>
                <button class="download-btn" onclick="downloadModel('${model.folder}', '${model.name}')">
                    ⬇️ Descargar
                </button>
            </div>
        `;

        grid.appendChild(card);
    });

    document.getElementById('modelCount').textContent = modelsToRender.length;
}

function downloadModel(folder, modelName) {
    showNotification(`Descargando ${modelName}...`);

    const downloadUrl = `https://github.com/${GITHUB_USER}/${GITHUB_REPO}/releases/download/modelos/${folder}.zip`;

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `${folder}.zip`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #e94560;
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        border: 2px solid #d63447;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    filterModels(searchTerm, category);
});

document.getElementById('categoryFilter').addEventListener('change', (e) => {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = e.target.value;
    filterModels(searchTerm, category);
});

function filterModels(searchTerm, category) {
    let filtered = models;

    if (category !== 'all') {
        filtered = filtered.filter(model => model.category === category);
    }

    if (searchTerm) {
        filtered = filtered.filter(model =>
            model.name.toLowerCase().includes(searchTerm)
        );
    }

    renderModels(filtered);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

renderModels();
