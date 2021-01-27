<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Entity extends Model
{

    public function category()
    {
        return $this->belongsTo('TCG\Voyager\Models\Category');
    }
}
