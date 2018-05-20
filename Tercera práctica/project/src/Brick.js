/**
 * This class represents a brick that the player can break with the ball
 * 
 * @author David Vargas, Andrés Molina
 * 
 * @param width - The width of the brick
 * @param height - The height of the brick
 * @param depth - The depth of the brick
 * @param material - The material of the brick
 * @param type - The type of the brick (game improvement)
 * 
 * @param fieldWidth - Width of the game field
 */

/**
 * -- CURRENT TYPES OF BRICK --
 * 0: normal brick. It breaks when the ball touches it and gives points to the player
 */

// Green, blue, fuchsia, red, yellow, gray
const brickColors = [0x00cc00, 0x0066ff, 0xff00ff, 0xff0000, 0xffff00, 0x808080];

class Brick extends THREE.Object3D {

    constructor(parameters) {
        super();

        // Color selection
        let randomNum = Math.floor(Math.random() * brickColors.length); 
        let brickColor = brickColors[randomNum];
        console.log("ER COLO: " + brickColor);

        this.fieldWidth = (parameters.fieldWidth === undefined ? 400 : parameters.fieldWidth);

        this.width = (parameters.width === undefined ? this.fieldWidth / 10 : parameters.width);
        this.height = (parameters.height === undefined ? 20 : parameters.height);
        this.depth = (parameters.depth === undefined ? 20 : parameters.depth);
        this.material = (parameters.material === undefined ? new THREE.MeshPhongMaterial({color: brickColor}) : parameters.material);
        this.type = (parameters.type === undefined ? 0 : parameters.type);

        // Points determination according to brick type
        // More types to be added
        switch (this.type) {
            case 0:
                this.points = 10;
                break;
        
            default:
                this.points = 10;
                break;
        }
    }

    /**
     * Create the brick on the desired position
     */
    createBrickOn(position_x, position_y, position_z) {
        var geometry = new THREE.BoxGeometry(this.depth, this.height, this.width);
        var cube = new THREE.Mesh(geometry, this.material);

        cube.applyMatrix(new THREE.Matrix4().makeTranslation(position_x, position_y, position_z));

        cube.receiveShadow = true;
        cube.autoUpdateMatrix = false;

        this.add(cube);
        return cube;
    }

}

