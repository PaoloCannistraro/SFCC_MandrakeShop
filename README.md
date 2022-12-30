# SFCC_MandrakeShop

An E-Commerce about tech components based in Saleforce Commerce Cloud.

Objective:

Using a service, we will update our products prices.
In order to help our consumers to find the right configuration for them, we will create presets of balanced bundles.

To-do:

1. [X] Creare un custom object con almeno due attributi oltre la keyvalue
2. [X] Estendere un system object (il più semplice è Product, ma ce ne sono tanti...)
3. [ ] Creare un service (anche l'xml)
4. [ ] Creare un job (anche l'xml)
5. [ ] Creare un custom hook
6. [X] Creare un controller
7. [X] Estendere l'endpoint di un controller esistente

# Getting Started

1. Clone this repository.
2. Install npm dependancies `npm install`.
3. Open package.json file and modify `paths.base` property to point to your locally installed app_storefront_base cartridge. The provided path assumes the storefront-reference-architecture folder is a sibling of sfra_demo folder.
4. Run `npm run compile:js` to compile client-side javascript.  There is no scss to compile.
5. Run `npm run uploadCartridge` if you have a properly configured dw.json with login credentials to your sandbox. Consult the storefront-reference-architecture repo for an example of this file.
6. In Business Manager, add sfra_demo to your site's cartridge path. The path must contain this cartridge in front of  app_storefront_base (which comes with SFRA).  Example: sfra_demo:app_storefront_base
7. In Business Manager, under Administration > Site Development > Import & Export, upload and import the newslettersubscription_co_metadata.xml.  This CO definition is required for the demo to work.
8. On a browser, invoke the Newsletter-Show route for in your site.  For example: https://<your_sandbox>/on/demandware.store/Sites-<your_site>-Site/en_US/Newsletter-Show.
9. To demonstrate a custom job step, add the sfra_demo cartridge to the Business Manager site cartridge path:
   a. Create a new job using Administration -> Operations -> Jobs
   b. Configure a job step: in the drop-down of steps, choose the custom.DeleteCustomObjects and provide the appropriate parameter.

# Compiling your application

* `npm run compile:js` - Compiles all js files and aggregates them.
* `npm run uploadCartridge` - Uploads the cartridge to your sandbox. A properly configured dw.json file is required (see initial commit for this repo to find a sample. Modify to point to your sandbox and active version).

# Testing

Since this is a demonstration cartridge, there are no automated tests.

# Contributing

Since this is a demonstration cartridge, suggestions for improvement are welcomed. Please contact jorge.hernandez@salesforce.com. Only properly commented code will be accepted.
