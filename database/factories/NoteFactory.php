<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\NoteSeeder>
 */
class NoteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $users = User::all();
        $randomUserId = $users->random()->id;
        return [
            "title" => fake()->title(),
            "description" => fake()->paragraph(2, true),
            "priority" => fake()->sentence(),
            "user_id" => $randomUserId
        ];
    }
}
