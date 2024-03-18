<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class NotesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Note/Create', [
            'note' => Note::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|max:255',
            'priority' => 'required',
            'description' => 'required'
        ]);

        $validatedData['user_id'] = auth()->user()->id;

        Note::create($validatedData);

        return Inertia::location(route('note.create'));
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $note = Note::findOrFail($id);
        return Inertia::render("Note/Show", [
            'title' => "Show Note",
            'note' => $note,
            'noteId' => $id
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Note $note)
    {
        return Inertia::render("Note/Update", [
            'title' => 'Edit',
            'note' => $note,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Note $note)
    {
        $rules = [
            'title' => 'required|max:255',
            'priority' => 'required',
            'description' => 'required'
        ];

        $validatedData = $request->validate($rules);

        $validatedData['user_id'] = auth()->user()->id;

        Note::where('id', $note->id)->update($validatedData);

        return Inertia::location(route('note.edit', ['note' => $note->id]));
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Note $note)
    {   
        Note::destroy($note->id);
        return Redirect::to('/');
    }
}
