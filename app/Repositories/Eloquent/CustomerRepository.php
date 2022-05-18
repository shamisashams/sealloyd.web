<?php
/**
 *  app/Repositories/Eloquent/ProductRepository.php
 *
 * Date-Time: 30.07.21
 * Time: 10:36
 * @author Insite LLC <hello@insite.international>
 */

namespace App\Repositories\Eloquent;


use App\Models\Customer;
use App\Models\Product;
use App\Repositories\CustomerRepositoryInterface;
use App\Repositories\Eloquent\Base\BaseRepository;

/**
 * Class LanguageRepository
 * @package App\Repositories\Eloquent
 */
class CustomerRepository extends BaseRepository implements CustomerRepositoryInterface
{
    /**
     * @param \App\Models\Customer $model
     */
    public function __construct(Customer $model)
    {
        parent::__construct($model);
    }



}
