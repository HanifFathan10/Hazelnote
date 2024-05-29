<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Support\Str;
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
        return [
            "title" => fake()->sentence(5),
            "slug" => Str::slug(fake()->sentence(2, true)),
            "description" => fake()->realText(),
            "priority" => fake()->sentence(2, true),
            "user_id" => User::factory()
        ];
    }
}
