export default class VolumeManager {
    static volumePercentage: number = 50;
    static globalVolume: number = 0.5; // Default global volume

    static increaseVolume() {
        this.volumePercentage = Phaser.Math.Clamp(this.volumePercentage + 10, 0, 100);
    }

    static decreaseVolume() {
        this.volumePercentage = Phaser.Math.Clamp(this.volumePercentage - 10, 0, 100);
    }

    static setGlobalVolume(volume: number) {
        this.globalVolume = volume;
    }

    static getGlobalVolume() {
        return this.globalVolume;
    }

    static getVolume() {
        return this.volumePercentage;
    }
}
//Author Marco De Melo
//marco.demelo2@Student.Sl.On.Ca