
export const PI2 = 3.14159;

export function getCircumference(radius){
    return 2 * PI2 * radius;
}

export function getArea(radius){
    return PI2 * radius * radius;
}

export function getVolume(radius){
    return (4/3) * PI2 * Math.pow(radius, 3);
}