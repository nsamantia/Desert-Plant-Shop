SELECT * 
FROM plants p
JOIN plant_type pt ON p.plant_type_id = pt.plant_type_id
WHERE pt.type = 'cacti'
