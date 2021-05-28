function handleColorPickerChange(e, changeHandler) {
    const { colorCode, colorName } = e.target.dataset
    changeHandler({colorCode, colorName})
}

const Color = (color, changeHandler) => {
    return `
        <div class="color ${color.name}" 
            data-color-name="${color.name}"
            data-color-code="${color.colorCode}"
            onclick="handleColorPickerChange(event, ${changeHandler})">
        </div>
    `
}

const colorPallete = [
    {
        name: "bg-white",
        colorCode: "#fff",
    },
    {
        name: "bg-red",
        colorCode: "#f28b82",
    },
    {
        name: "bg-orange",
        colorCode: "#fbbc04",
    },
    {
        name: "bg-yellow",
        colorCode: "#fff475",
    },
    {
        name: "bg-darkblue",
        colorCode: "#aecbfa",
    },
    {
        name: "bg-blue",
        colorCode: "#cbf0f8",
    },
    {
        name: "bg-teal",
        colorCode: "#a7ffeb",
    },
    {
        name: "bg-green",
        colorCode: "#ccff90",
    },
    {
        name: "bg-purple",
        colorCode: "#d7aefb",
    },
]

const ColorPickerComponent = (changeHandler = () => {}) => {

    return `
        <div class="color-picker">
            <button class="btn btn-secondary">Color</button>
            <div class="color-picker-options">
                ${colorPallete.map(p => Color(p, changeHandler)).join("")}
            </div>
        </div>
    `
}