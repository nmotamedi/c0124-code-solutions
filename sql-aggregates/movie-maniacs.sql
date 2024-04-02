select "firstName",
"lastName",
sum("amount") as "totalPaid"
from "payments"
join "customers" using ("customerId")
group by "customerId"
order by "totalPaid" desc;
