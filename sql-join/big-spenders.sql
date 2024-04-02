select "payments"."amount" as "paymentAmount",
"customers"."firstName",
"customers"."lastName"
from "payments"
join "customers" using ("customerId")
order by "payments"."amount" desc
limit 10;
