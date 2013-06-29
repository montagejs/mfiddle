exports.components = [
    {
        label: "Button", name: "button",
        x: 0, y: -76, left: 11,
        serialization: {
            "prototype": "digit/ui/button.reel",
            "properties": {
                "label": "Button",
                "enabled": true
            }
        },
        html: '<button data-montage-id=""></button>'
    },
    {
        label: "Slider", name: "slider",
        x: -45, y: -76, width: 43, left: 13,
        serialization: {
            "prototype": "digit/ui/slider.reel",
            "properties": {
                "min": 0,
                "max": 100,
                "value": 50
            }
        },
        html: '<input type="slider" data-montage-id="">'
    },
    {
        label: "Checkbox", name: "checkbox",
        x: -89, y: -76, left: 22, width: 24,
        serialization: {
            "prototype": "digit/ui/checkbox.reel",
            "properties": {
                "checked": true
            }
        },
        html: '<input type="checkbox" data-montage-id="">'
    },
    {
        label: "TextField", name: "textField",
        x: -69, y: -101, left: 14,
        serialization: {
            "prototype": "digit/ui/text-field.reel",
            "properties": {
                "value": "Editable text"
            }
        },
        html: '<input data-montage-id="" type="text">'
    },
    {
        label: "Text", name: "text",
        x: -37, y: -50, left: 12, width: 44,
        serialization: {
            "prototype": "montage/ui/text.reel",
            "properties": {
                "value": "Text"
            }
        },
        html: '<p data-montage-id=""></p>'
    },
    {
        label: "Repetition", name: "repetition",
        x: -29, y: -125, left: 19, width: 30,
        serialization: {
            "prototype": "montage/ui/repetition.reel",
            "properties": {
                "content": [1, 2, 3]
            }
        },
        html: '<ul data-montage-id=""><li>Item</li></ul>'
    }
];

