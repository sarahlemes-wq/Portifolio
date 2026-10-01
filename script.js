const projects = [
    {
        aula: "Aula 01",
        title: "Light Painting I",
        category: "Light Painting",
        author: "Sarah Lemes",
        image: "fotos/lights1.jpg",
        description: "Trabalho desenvolvido utilizando a técnica de Light Painting, explorando o movimento da luz e o tempo de exposição."
    },

    {
        aula: "Aula 01",
        title: "Light Painting II",
        category: "Light Painting",
        author: "Sarah Lemes",
        image: "fotos/lights2.jpg",
        description: "Segundo trabalho de Light Painting, explorando diferentes movimentos e formas de criar efeitos com a luz."
    },

    {
        aula: "Aula 02",
        title: "Ângulo e Enquadramento I",
        category: "Ângulo",
        author: "Sarah Lemes",
        image: "fotos/ang1.JPG",
        description: "Exercício explorando diferentes possibilidades de ângulo."
    },

    {
        aula: "Aula 02",
        title: "Ângulo e Enquadramento II",
        category: "Ângulo",
        author: "Sarah Lemes",
        image: "fotos/ang2.JPG",
        description: "Exercício explorando diferentes possibilidades de ângulo."
    },

    {
        aula: "Aula 02",
        title: "Ângulo e Enquadramento III",
        category: "Ângulo",
        author: "Sarah Lemes",
        image: "fotos/ang3.JPG",
        description: "Exercício explorando diferentes possibilidades de ângulo."
    },

    {
        aula: "Aula 02",
        title: "Ângulo e Enquadramento IV",
        category: "Enquadramento",
        author: "Sarah Lemes",
        image: "fotos/enq1.JPG",
        description: "Exercício explorando diferentes possibilidades de enquadramento."
    },

    {
        aula: "Aula 02",
        title: "Ângulo e Enquadramento V",
        category: "Enquadramento",
        author: "Sarah Lemes",
        image: "fotos/enq2.JPG",
        description: "Exercício explorando diferentes possibilidades de enquadramento."
    },

    {
        aula: "Aula 02",
        title: "Ângulo e Enquadramento VI",
        category: "Enquadramento",
        author: "Sarah Lemes",
        image: "fotos/enq3.JPG",
        description: "Exercício explorando diferentes possibilidades de enquadramento."
    },

    {
        aula: "Aula 03",
        title: "Regra dos Terços I",
        category: "Regra dos Terços",
        author: "Sarah Lemes",
        image: "fotos/regra1.jpg",
        description: "Primeiro exercício utilizando a regra dos terços para posicionar o elemento principal da fotografia."
    },

    {
        aula: "Aula 03",
        title: "Regra dos Terços II",
        category: "Regra dos Terços",
        author: "Sarah Lemes",
        image: "fotos/regra2.jpg",
        description: "Segundo exercício trabalhando a posição dos elementos dentro da composição."
    },

    {
        aula: "Aula 03",
        title: "Regra dos Terços III",
        category: "Regra dos Terços",
        author: "Sarah Lemes",
        image: "fotos/regra3.jpg",
        description: "Fotografia aplicando a regra dos terços para criar equilíbrio na composição."
    },

    {
        aula: "Aula 03",
        title: "Regra dos Terços IV",
        category: "Regra dos Terços",
        author: "Sarah Lemes",
        image: "fotos/regra4.jpg",
        description: "Exercício final utilizando a regra dos terços como recurso de composição."
    },

    {
        aula: "Aula 04",
        title: "Dupla Exposição",
        category: "Dupla Exposição",
        author: "Sarah Lemes",
        image: "fotos/exp1.png",
        description: "Atividade desenvolvida utilizando a técnica de dupla exposição, combinando duas imagens em uma única composição."
    },

    {
        aula: "Aula 05",
        title: "Motion Blur",
        category: "Motion Blur",
        author: "Sarah Lemes",
        image: "fotos/sarah.jpg",
        description: "Atividade desenvolvida utilizando a técnica de Motion Blur, explorando o movimento e o desfoque criado durante a captura da fotografia."
    },

    {
        aula: "Aula 06",
        title: "Espelho e Paisagem I",
        category: "Espelho e Paisagem",
        author: "Sarah Lemes",
        image: "fotos/paisagem3.jpg",
        description: "Primeira atividade explorando o uso do espelho para criar reflexos e integrar a paisagem à composição fotográfica."
    },

    {
        aula: "Aula 06",
        title: "Espelho e Paisagem II",
        category: "Espelho e Paisagem",
        author: "Sarah Lemes",
        image: "fotos/paisagem2.jpg",
        description: "Segunda atividade utilizando o espelho como elemento visual, explorando reflexos, profundidade e paisagem."
    },

    {
        aula: "Aula 06",
        title: "Espelho e Paisagem III",
        category: "Espelho e Paisagem",
        author: "Sarah Lemes",
        image: "fotos/paisagem1.jpg",
        description: "Terceira atividade trabalhando a relação entre o espelho e a paisagem, criando uma composição com diferentes planos."
    },

    {
        aula: "Aula 07",
        title: "Formas e Texturas I",
        category: "Formas e Texturas",
        author: "Sarah Lemes",
        image: "fotos/textu1.jpg",
        description: "Atividade de fotografia que explora detalhes do espaço escolar."
    },

    {
        aula: "Aula 07",
        title: "Formas e Texturas II",
        category: "Formas e Texturas",
        author: "Sarah Lemes",
        image: "fotos/textu2.jpg",
        description: "Atividade de fotografia que explora detalhes do espaço escolar."
    },

    {
        aula: "Aula 07",
        title: "Formas e Texturas III",
        category: "Formas e Texturas",
        author: "Sarah Lemes",
        image: "fotos/textu3.jpg",
        description: "Terceira atividade utilizando formas e texturas como elementos principais da composição."
    },

    {
        aula: "Aula 07",
        title: "Formas e Texturas IV",
        category: "Formas e Texturas",
        author: "Sarah Lemes",
        image: "fotos/textu4.jpg",
        description: "Atividade de fotografia que explora detalhes do espaço escolar."
    },

    {
        aula: "Aula 07",
        title: "Formas e Texturas V",
        category: "Formas e Texturas",
        author: "Sarah Lemes",
        image: "fotos/textu5.jpg",
        description: "Atividade de fotografia que explora detalhes do espaço escolar."
    },

    {
        aula: "Aula 07",
        title: "Formas e Texturas VI",
        category: "Formas e Texturas",
        author: "Sarah Lemes",
        image: "fotos/textu6.jpg",
        description: "Atividade de fotografia que explora detalhes do espaço escolar."
    },

    {
        aula: "Aula 07",
        title: "Formas e Texturas VII",
        category: "Formas e Texturas",
        author: "Sarah Lemes",
        image: "fotos/textu7.jpg",
        description: "Atividade de fotografia que explora detalhes do espaço escolar."
    },

    {
        aula: "Aula 08",
        title: "COLAGEM",
        category: "Fotocolagem",
        author: "Sarah Lemes",
        image: "fotos/colagem.png",
        description: "Atividade desenvolvida explorando a fotocolagem e a combinação de diferentes elementos visuais em uma única composição."
    },

    {
        aula: "Aula 09",
        title: "Revista Dupla",
        category: "Fotografia de Produto",
        author: "Sarah Lemes",
        image: "fotos/revista.png",
        description: "Primeira atividade de fotografia de produto, explorando iluminação, enquadramento e composição para destacar o objeto fotografado."
    },

    {
        aula: "Aula 09",
        title: "Folder",
        category: "Fotografia de Produto",
        author: "Sarah Lemes",
        image: "fotos/folder2.png",
        description: "Segunda atividade de fotografia de produto, trabalhando diferentes ângulos, composição e apresentação visual do produto."
    }
];

const modal = document.getElementById("lightbox");
const modalImg = document.getElementById("lightbox-img");
const modalTag = document.getElementById("lightbox-tag");
const modalTitle = document.getElementById("lightbox-title");
const modalAuthor = document.getElementById("lightbox-author");
const modalDescription = document.getElementById("lightbox-description");
const counter = document.getElementById("lightbox-counter");
const closeButton = document.getElementById("close-btn");
const previousButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

const lessonGalleries = {
    "Aula 01": document.getElementById("gallery-aula1"),
    "Aula 02": document.getElementById("gallery-aula2"),
    "Aula 03": document.getElementById("gallery-aula3"),
    "Aula 04": document.getElementById("gallery-aula4"),
    "Aula 05": document.getElementById("gallery-aula5"),
    "Aula 06": document.getElementById("gallery-aula6"),
    "Aula 07": document.getElementById("gallery-aula7"),
    "Aula 08": document.getElementById("gallery-aula8"),
    "Aula 09": document.getElementById("gallery-aula9")
};

let currentProjects = [];
let currentIndex = 0;

function renderGallery() {

    Object.values(lessonGalleries).forEach(function (gallery) {

        if (gallery) {
            gallery.innerHTML = "";
        }

    });

    Object.keys(lessonGalleries).forEach(function (aula) {

        const gallery = lessonGalleries[aula];

        if (!gallery) {
            return;
        }

        const aulaProjects = projects.filter(function (project) {
            return project.aula === aula;
        });

        aulaProjects.forEach(function (project, index) {

            const card = document.createElement("article");

            card.className = "project-card";

            card.innerHTML = `
                <div class="project-image">
                    <img
                        src="${project.image}"
                        alt="${project.title}"
                        loading="lazy"
                    >
                </div>

                <div class="project-info">

                    <div>
                        <span class="project-category">
                            ${project.category}
                        </span>

                        <h3 class="project-title">
                            ${project.title}
                        </h3>
                    </div>

                    <span class="project-number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                </div>
            `;

            card.addEventListener("click", function () {
                openModal(project);
            });

            gallery.appendChild(card);

        });

    });
}

function openModal(project) {

    currentProjects = projects.filter(function (item) {
        return item.aula === project.aula;
    });

    currentIndex = currentProjects.indexOf(project);

    updateModal();

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}

function updateModal() {

    const project = currentProjects[currentIndex];

    if (!project) {
        return;
    }

    modalImg.src = project.image;
    modalImg.alt = project.title;

    modalTag.textContent =
        project.aula + " — " + project.category;

    modalTitle.textContent =
        project.title;

    modalAuthor.textContent =
        "Projeto desenvolvido por " + project.author;

    modalDescription.textContent =
        project.description;

    counter.textContent =
        String(currentIndex + 1).padStart(2, "0") +
        " / " +
        String(currentProjects.length).padStart(2, "0");
}

function closeModal() {

    modal.classList.remove("active");

    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}

function navigate(direction) {

    if (currentProjects.length <= 1) {
        return;
    }

    currentIndex += direction;

    if (currentIndex >= currentProjects.length) {
        currentIndex = 0;
    }

    if (currentIndex < 0) {
        currentIndex = currentProjects.length - 1;
    }

    updateModal();
}

closeButton.addEventListener("click", function () {
    closeModal();
});

previousButton.addEventListener("click", function () {
    navigate(-1);
});

nextButton.addEventListener("click", function () {
    navigate(1);
});

modal.addEventListener("click", function (event) {

    if (event.target === modal) {
        closeModal();
    }

});

document.addEventListener("keydown", function (event) {

    if (!modal.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        closeModal();
    }

    if (event.key === "ArrowRight") {
        navigate(1);
    }

    if (event.key === "ArrowLeft") {
        navigate(-1);
    }

});

renderGallery();