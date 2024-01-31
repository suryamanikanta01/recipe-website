const recipeList = document.getElementById('recipeList');
const addRecipePage = document.getElementById('addRecipePage');

function openAddPage() {
    addRecipePage.classList.toggle('hidden');
}

function addRecipe() {
    const recipeName = document.getElementById('recipeName').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    if (recipeName.trim() !== '' && ingredients.trim() !== '' && instructions.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${recipeName}</strong><br><em>Ingredients:</em> ${ingredients}<br><em>Instructions:</em> ${instructions}<br><button onclick="editRecipe(this)">Edit</button><button onclick="deleteRecipe(this)">Delete</button>`;
        recipeList.appendChild(li);

        // Clear input fields after adding a recipe
        document.getElementById('recipeName').value = '';
        document.getElementById('ingredients').value = '';
        document.getElementById('instructions').value = '';

        // Hide the add recipe page
        addRecipePage.classList.add('hidden');
    } else {
        alert('Please fill in all fields before saving the recipe.');
    }
}

function editRecipe(button) {
    const li = button.parentElement;
    const recipeName = li.querySelector('strong').textContent;
    const ingredients = li.querySelector('em:nth-child(2)').textContent.substring('Ingredients:'.length).trim();
    const instructions = li.querySelector('em:nth-child(3)').textContent.substring('Instructions:'.length).trim();

    // Set values in the form for editing
    document.getElementById('recipeName').value = recipeName;
    document.getElementById('ingredients').value = ingredients;
    document.getElementById('instructions').value = instructions;

    // Remove the recipe from the list
    li.remove();

    // Open the add recipe page for editing
    openAddPage();
}

function deleteRecipe(button) {
    const li = button.parentElement;
    li.remove();
}
