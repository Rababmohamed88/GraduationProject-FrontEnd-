export class CarDetails {
    constructor(public car_name: string = "car name",
                
                public electric_handbrake?: boolean, public power_assisted_steering: string = "", public active_park_assist?: boolean,
                public traction_control?: boolean, public tire_pressure_monitoring?: boolean, public anti_Lock_braking_system?: boolean,
                public electronic_stability_program?: boolean, public airbags?: number, public hill_assist?: boolean,
                public speed_limiter?: boolean, public automatic_start_stop_function?: boolean, public immobilizer?: boolean,
                public child_seats?: boolean, public electronic_brake_force_distribution?: boolean, public cruise_control?: boolean,
        
                public cylinders?: number, public maximum_torque: string = "", public fuel_consumption?: number,
                public fuel_type?: number, public maximum_power: string = "", public acceleration?: number,
                public maximum_speed?: number, public fuel_tank_capacity?: number, public gear_shifts?: number,

                public multi_function_steering_wheel?: boolean, public paddle_shifters?: boolean, public leather_steering_Wheel?: boolean,
                public variable_heated_driver_passenger_seat?: boolean, public power_tailgate?: boolean, public ambient_lighting: string = "",
                public number_of_seats?: number, public keyless_start_stop?: boolean, public rear_parking_sensors?: boolean,
                public rear_view_camera?: boolean, public passenger_seat: string = "", public center_lock?: boolean,
                public dashboard: string = "", public drive_mode_select?: number, public ac_for_back_seats?: boolean,
                public leather_transmission?: boolean, public back_holder?: boolean, public keyless_entry?: boolean,
                public auto_dimming_mirror?: boolean, public air_condition: string = "", public auto_folding_for_back_seats?: boolean,
                public front_parking_sensors?: boolean, public front_camera?: boolean, public driver_seat: string = "",
                public leather_seats?: boolean, public electronic_window?: boolean,

                public rain_sensor?: boolean, public fog_lamps?: boolean, public rear_lamps: string = "",
                public auto_lighting?:boolean, public wheels_with_tire_size: string = "", public panorama_roof?: boolean,
                public auto_folding_mirrors?: boolean, public privacy_glass?: boolean, public headlamps: string = "",
                public led_daytime_running_lamps?: boolean, public light_sensors?: boolean,
                public sun_roof?: boolean, public power_mirrors?: boolean, public rim_size: string = "",

                public aux?: boolean, public usb?: boolean, public multifunction_steering_wheel?: boolean,
                public touch_screen?: number, public wireless_charger?: boolean, public bluetooth?: boolean,
                public head_up_display?: boolean, public smartphone_link_system:string = "", 
                public navigation_system?:boolean, public speakers?: boolean,

                public luggage_box_capacity?: number, public clearance?: number, public width?: number,
                public wheelbase?: number, public length?: number, public height?: number,
        ){

    }
}
