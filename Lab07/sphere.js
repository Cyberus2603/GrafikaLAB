
class Sphere {
    constructor(radius,texture,texture_vertecies,pos_x = 0,pos_y = 0,pos_z = 0,step_elevation = 90/30,step_angle = 360/60) {
        this.radius = radius;
        this.texture = texture;
        this.texture_vertecies = texture_vertecies;
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.pos_z = pos_z;
        this.step_elevation = step_elevation;
        this.step_angle = step_angle;

        for(let elevation=-90; elevation< 90; elevation+= this.step_elevation) {
            for(let angle = 0; angle < 360; angle+= this.step_angle) {
                this.texture_vertecies.push(...createRectCoords(0,0,1,0,0,1));
            }
        }
    }
    triangleVertecies(){
        let vertexes = [];
        for(let elevation=-90; elevation< 90; elevation+= this.step_elevation) {
            let radius_xz = this.radius*Math.cos(elevation*Math.PI/180);
            let radius_y  = this.radius*Math.sin(elevation*Math.PI/180);

            let radius_xz2 = this.radius*Math.cos((elevation+this.step_elevation)*Math.PI/180);
            let radius_y2  = this.radius*Math.sin((elevation+this.step_elevation)*Math.PI/180);

            for(let angle = 0; angle < 360; angle+= this.step_angle) {

                let px1 = radius_xz*Math.cos(angle*Math.PI/180);
                let py1 = radius_y;
                let pz1 = radius_xz*Math.sin(angle*Math.PI/180);

                let px2 = radius_xz*Math.cos((angle+this.step_angle)*Math.PI/180);
                let py2 = radius_y;
                let pz2 = radius_xz*Math.sin((angle+this.step_angle)*Math.PI/180);

                let px3 = radius_xz2*Math.cos(angle*Math.PI/180);
                let py3 = radius_y2;
                let pz3 = radius_xz2*Math.sin(angle*Math.PI/180);

                let px4 = radius_xz2*Math.cos((angle+this.step_angle)*Math.PI/180);
                let py4 = radius_y2;
                let pz4 = radius_xz2*Math.sin((angle+this.step_angle)*Math.PI/180);

                vertexes.push(...createRect2(
                    px1 + this.pos_x,py1 + this.pos_y,pz1 + this.pos_z,
                    px2 + this.pos_x,py2 + this.pos_y,pz2 + this.pos_z,
                    px3 + this.pos_x,py3 + this.pos_y,pz3 + this.pos_z,
                    px4 + this.pos_x,py4 + this.pos_y,pz4 + this.pos_z));
            }
        }
        return vertexes;
    }
    colorVertecies() {
        let color_vertecies = [];
        for(let elevation=-90; elevation< 90; elevation+= this.step_elevation) {
            for(let angle = 0; angle < 360; angle+= this.step_angle) {
                color_vertecies.push(...createRectColor(0.0,0.0,0.0));
            }
        }
        return color_vertecies;
    }
    textureVertecies(){
        return this.texture_vertecies;
    }
    normalVertecies(){
        let normals = [];
        for(let elevation=-90; elevation< 90; elevation+= this.step_elevation) {
            let radius_xz = this.radius*Math.cos(elevation*Math.PI/180);
            let radius_y  = this.radius*Math.sin(elevation*Math.PI/180);

            let radius_xz2 = this.radius*Math.cos((elevation+this.step_elevation)*Math.PI/180);
            let radius_y2  = this.radius*Math.sin((elevation+this.step_elevation)*Math.PI/180);

            for(let angle = 0; angle < 360; angle+= this.step_angle) {

                let px1 = radius_xz*Math.cos(angle*Math.PI/180);
                let py1 = radius_y;
                let pz1 = radius_xz*Math.sin(angle*Math.PI/180);

                let px2 = radius_xz*Math.cos((angle+this.step_angle)*Math.PI/180);
                let py2 = radius_y;
                let pz2 = radius_xz*Math.sin((angle+this.step_angle)*Math.PI/180);

                let px3 = radius_xz2*Math.cos(angle*Math.PI/180);
                let py3 = radius_y2;
                let pz3 = radius_xz2*Math.sin(angle*Math.PI/180);

                let px4 = radius_xz2*Math.cos((angle+this.step_angle)*Math.PI/180);
                let py4 = radius_y2;
                let pz4 = radius_xz2*Math.sin((angle+this.step_angle)*Math.PI/180);

                let p1 = Math.sqrt(px1*px1+py1*py1+pz1*pz1)
                let p2 = Math.sqrt(px2*px2+py2*py2+pz2*pz2)
                let p3 = Math.sqrt(px3*px3+py3*py3+pz3*pz3)
                let p4 = Math.sqrt(px4*px4+py4*py4+pz4*pz4)

                px1 /= p1
                py1 /= p1
                pz1 /= p1

                px2 /= p2
                py2 /= p2
                pz2 /= p2

                px3 /= p3
                py3 /= p3
                pz3 /= p3

                px4 /= p4
                py4 /= p4
                pz4 /= p4

                normals.push(...createRect2(
                    px1 + this.pos_x,py1 + this.pos_y,pz1 + this.pos_z,
                    px2 + this.pos_x,py2 + this.pos_y,pz2 + this.pos_z,
                    px3 + this.pos_x,py3 + this.pos_y,pz3 + this.pos_z,
                    px4 + this.pos_x,py4 + this.pos_y,pz4 + this.pos_z));
            }
        }
        return normals;
    }

}